import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import SideBar from "../0568/components/SideBar";
import Content from "../0568/components/Content";
import Exercise from "../0568/components/Exercise";
import Chart from "../0568/pages/Charts";
import Forum from "../0568/pages/Forum";
import Checklist from "../0696/pages/CheckList";
import HomePage from "../0712/pages/HomePage";
import BmiPage from "../0712/pages/BmiPage";
import Notifications from "../0568/pages/Notifications";
import { Education } from "../0612/pages/Education";
import Hotspots from "../0568/pages/Hotspots";
import SettingsPage from "../0568/pages/SettingsPage";

const Home = () => {
	return (
		<div className='flex flex-row w-full h-screen bg-slate-200 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300'>
			<SideBar />
			<div className='flex flex-col w-full h-full overflow-y-auto align-center'>
				<Routes>
					<Route path='/dashboard' element={<Content />} />
					<Route
						path='/dashboard/exercise/:query'
						element={<Exercise />}
					/>
					<Route path='/discussion' element={<Forum/>} />
					{/* <Route
						path='/notification'
						element={<h1>notification</h1>}
					/> */}
					<Route path='/chart' element={<Chart />} />
					<Route path='performance' element={<Chart />} />
					<Route path='/guides/*' element={<Education />} />
					<Route path='/hotspots' element={<Hotspots />} />
					<Route path='/settings' element={<SettingsPage />} />
					<Route path='/checklist' element={<Checklist/>} />
					<Route path='/home' element={<HomePage/>} />
					<Route path='/home/bmi' element={<BmiPage/>} />
					<Route path='/notifications' element={<Notifications/>} />
					<Route path='*' element={<Navigate to="/dashboard" replace />} />
				</Routes>
			</div>
		</div>
	);
};

export default Home;
