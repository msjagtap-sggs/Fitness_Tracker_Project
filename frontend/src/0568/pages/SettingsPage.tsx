import React from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getLogin } from "../../redux/authentication/action";
import { toast, ToastContainer } from "react-toastify";

const SettingsPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const activeTab = searchParams.get("tab") || "general";
	
	const { user } = useSelector((state: any) => state.authReducer);
	const dispatch = useDispatch();

	const [darkMode, setDarkMode] = React.useState(() => {
		return document.documentElement.classList.contains("dark") || localStorage.getItem("theme") === "dark";
	});

	const [formData, setFormData] = React.useState({
		name: "",
		gender: "Not Assigned",
		phone: ""
	});

	React.useEffect(() => {
		if (user) {
			setFormData({
				name: user.name || "",
				gender: user.gender || "Not Assigned",
				phone: user.phone || ""
			});
		}
	}, [user]);

	const handleTabChange = (tabName: string) => {
		setSearchParams({ tab: tabName, userID: searchParams.get("userID") || "" });
	};

	const toggleDarkMode = () => {
		const nextDark = !darkMode;
		setDarkMode(nextDark);
		if (nextDark) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
			toast.success("Dark Mode enabled!");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
			toast.success("Light Mode enabled!");
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSaveProfile = (e: React.FormEvent) => {
		e.preventDefault();
		toast.success("Profile updated successfully (local simulated save)!");
	};

	return (
		<div className="w-full min-h-screen bg-slate-100 dark:bg-gray-900 p-6 transition-colors duration-300">
			<ToastContainer />
			<div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
				<div className="md:flex">
					{/* Sidebar Tabs */}
					<div className="w-full md:w-1/4 bg-slate-50 dark:bg-gray-900 p-6 border-r border-gray-200 dark:border-gray-700">
						<h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Settings</h2>
						<div className="space-y-2">
							<button
								onClick={() => handleTabChange("general")}
								className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
									activeTab === "general"
										? "bg-indigo-600 text-white shadow-md"
										: "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
								}`}
							>
								General Info
							</button>
							<button
								onClick={() => handleTabChange("theme")}
								className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
									activeTab === "theme"
										? "bg-indigo-600 text-white shadow-md"
										: "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
								}`}
							>
								Themes & Customization
							</button>
						</div>
					</div>

					{/* Settings Content */}
					<div className="w-full md:w-3/4 p-8">
						{activeTab === "general" && (
							<div>
								<h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">General Information</h3>
								{user && (
									<div className="flex items-center space-x-4 mb-8">
										<img
											src={user.img || "https://www.customguide.com/img/user-images/generic-profile.png"}
											alt="Profile Avatar"
											className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500"
										/>
										<div>
											<h4 className="text-lg font-bold text-gray-800 dark:text-white">{user.name}</h4>
											<p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
										</div>
									</div>
								)}

								<form onSubmit={handleSaveProfile} className="space-y-6">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div>
											<label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
												Full Name
											</label>
											<input
												type="text"
												name="name"
												value={formData.name}
												onChange={handleInputChange}
												className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
												required
											/>
										</div>

										<div>
											<label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
												Gender
											</label>
											<select
												name="gender"
												value={formData.gender}
												onChange={handleInputChange}
												className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
											>
												<option value="Male">Male</option>
												<option value="Female">Female</option>
												<option value="Other">Other</option>
												<option value="Not Assigned">Not Assigned</option>
											</select>
										</div>

										<div>
											<label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
												Phone Number
											</label>
											<input
												type="text"
												name="phone"
												value={formData.phone}
												onChange={handleInputChange}
												className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
												placeholder="Enter phone number"
											/>
										</div>
									</div>

									<div className="flex justify-end pt-4">
										<button
											type="submit"
											className="px-6 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-all duration-200 shadow-md"
										>
											Save Changes
										</button>
									</div>
								</form>
							</div>
						)}

						{activeTab === "theme" && (
							<div>
								<h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Themes & Customization</h3>
								<div className="bg-slate-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-between">
									<div>
										<h4 className="text-lg font-bold text-gray-800 dark:text-white">Dark Mode</h4>
										<p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
											Switch between light and dark visual themes.
										</p>
									</div>
									<button
										onClick={toggleDarkMode}
										className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
											darkMode ? "bg-indigo-600" : "bg-gray-300"
										}`}
									>
										<span
											className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
												darkMode ? "translate-x-5" : "translate-x-0"
											}`}
										/>
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SettingsPage;
