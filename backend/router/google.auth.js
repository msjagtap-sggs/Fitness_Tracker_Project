const express = require("express");
const GoogleRouter = express.Router();
const passport = require("../confgs/google");
const bcrypt = require("bcrypt");
const UserModel = require("../models/usermodel");
require("dotenv").config();
const FRONTEND_CALLBACK_URL = process.env.FRONTEND_CALLBACK_URL;
let RedirectLink = `${FRONTEND_CALLBACK_URL}/home`;
let RedirectLink2 = `${FRONTEND_CALLBACK_URL}`;

GoogleRouter.get(
	"/google",
	passport.authenticate("google", { scope: ["profile", "email"] })
);

GoogleRouter.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: "/auth/login/success",
		failureRedirect: "/auth/login/failed",
	})
);

GoogleRouter.get("/login/success", async (req, res) => {
	if (!req.user) {
		return res.redirect(`${RedirectLink2}?authsuccess=false`);
	}
	let payload = req.user;

	let userDetails = {
		name: payload.displayName,
		email: payload.emails[0].value,
		gender: "Not Assigned",
		phone: 0,
		password: payload.emails[0].value,
		img: payload.photos[0].value,
		verified: true,
	};
	// console.log(userDetails)
	console.log("Google Auth Accessed by " + userDetails.email);
	try {
		let user = await UserModel.find({ email: userDetails.email });
		if (user.length !== 0) {
			let id = user[0]._id;
			res.redirect(`${RedirectLink}?authsuccess=true&userID=${id}`);
		} else {
			bcrypt.hash(userDetails.email, 10, async (err, hash) => {
				if (hash) {
					userDetails.password = hash;
					let instance = new UserModel(userDetails);
					await instance.save();
					res.redirect(
						`${RedirectLink}?authsuccess=true&userID=${instance._id}`
					);
				}
			});
		}
	} catch (error) {
		console.log(error);
		res.redirect(`${RedirectLink2}?authsuccess=false`);
	}
});
GoogleRouter.get("/login/failed", (req, res) => {
	res.redirect(`${RedirectLink2}?authsuccess=false`);
});

GoogleRouter.get("/logout", (req, res, next) => {
	req.logout((err) => {
		if (err) {
			return next(err);
		}
		res.redirect(`${RedirectLink2}`);
	});
});

GoogleRouter.post("/signup", async (req, res) => {
	const { name, email, password } = req.body;
	try {
		const existingUser = await UserModel.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: "User already exists with this email" });
		}
		
		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = new UserModel({
			name,
			email,
			password: hashedPassword,
			gender: "Not Assigned",
			phone: 0,
			img: "",
			verified: true,
		});
		await newUser.save();
		res.json({ message: "Registration successful", userID: newUser._id });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

GoogleRouter.post("/login", async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await UserModel.findOne({ email });
		if (!user) {
			return res.status(400).json({ message: "User not found" });
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ message: "Invalid credentials" });
		}

		res.json({ message: "Login successful", userID: user._id, user });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

module.exports = GoogleRouter;
