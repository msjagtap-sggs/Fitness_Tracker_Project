import React from "react";
import { useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Router from "./routes/Router";
import { Education } from "./0612/pages/Education";
import Checklist from "./0696/pages/CheckList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const location = useLocation();
	const pathName = location.pathname;

	React.useEffect(() => {
		if (localStorage.getItem("theme") === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, []);

	return (
		<div className='bg-slate-200 max-h-screen'>
			<ToastContainer />
			{(pathName === "/" || pathName === "/login") && <Router />}
			{pathName !== "/" && pathName !== "/login" && <Home />}
			{/* <Education/> */}
		</div>
	);
}

export default App;
