const express = require("express");
const exerciseRouter = express.Router();
const exercises = require("../confgs/exercises.json");

// Extract unique lists once at startup
const bodyParts = [...new Set(exercises.map(ex => ex.body_part).filter(Boolean))].sort();
const equipments = [...new Set(exercises.map(ex => ex.equipment).filter(Boolean))].sort();
const targets = [...new Set(exercises.map(ex => ex.target).filter(Boolean))].sort();

// Helper to map DB exercise schema to frontend schema
function mapExercise(ex) {
	return {
		id: ex.id,
		name: ex.name,
		bodyPart: ex.body_part,
		equipment: ex.equipment,
		target: ex.target,
		gifUrl: ex.gif_url ? `https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/${ex.gif_url}` : ""
	};
}

// Helper to safely convert query parameter to a single string
function getQueryString(param) {
	if (!param) return "";
	if (Array.isArray(param)) {
		return String(param[0]);
	}
	return String(param);
}

// Routes
exerciseRouter.get("/bodypart", (req, res) => {
	res.json(bodyParts);
});

exerciseRouter.get("/equipment", (req, res) => {
	res.json(equipments);
});

exerciseRouter.get("/target", (req, res) => {
	res.json(targets);
});

exerciseRouter.get("/exercise", (req, res) => {
	const bodyPart = getQueryString(req.query.bodyPart);
	const equipment = getQueryString(req.query.equipment);
	const target = getQueryString(req.query.target);
	const name = getQueryString(req.query.name);
	
	let filtered = exercises;

	if (bodyPart) {
		const bpLower = bodyPart.toLowerCase();
		filtered = filtered.filter(ex => ex.body_part && ex.body_part.toLowerCase() === bpLower);
	}
	if (equipment) {
		const eqLower = equipment.toLowerCase();
		filtered = filtered.filter(ex => ex.equipment && ex.equipment.toLowerCase() === eqLower);
	}
	if (target) {
		const tgLower = target.toLowerCase();
		filtered = filtered.filter(ex => ex.target && ex.target.toLowerCase() === tgLower);
	}
	if (name) {
		const nameLower = name.toLowerCase();
		filtered = filtered.filter(ex => ex.name && ex.name.toLowerCase().includes(nameLower));
	}

	res.json(filtered.map(mapExercise));
});

module.exports = { exerciseRouter };
