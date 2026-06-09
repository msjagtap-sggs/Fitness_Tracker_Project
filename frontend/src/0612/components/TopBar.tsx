import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export const TopBar = () => {
	const [searchParam] = useSearchParams();
	const userID = searchParam.get("userID") || "";

	return (
		<div className="px-5 py-2 bg-blue-200 dark:bg-gray-800 text-gray-800 dark:text-white border-b dark:border-gray-700 transition-colors duration-300">
			<ul className="flex gap-10 justify-center">
				<Link to={userID ? `/guides?userID=${userID}` : "/guides"}>
					<li className="text-gray-800 dark:text-gray-200 hover:bg-sky-700 dark:hover:bg-sky-600 hover:text-white py-1 px-3 rounded transition-colors duration-150">Video</li>
				</Link>
				<Link to={userID ? `/guides/blogs?userID=${userID}` : "/guides/blogs"}>
					<li className="text-gray-800 dark:text-gray-200 hover:bg-sky-700 dark:hover:bg-sky-600 hover:text-white py-1 px-3 rounded transition-colors duration-150">Blogs</li>
				</Link>
				<Link to={userID ? `/guides/articles?userID=${userID}` : "/guides/articles"}>
					<li className="text-gray-800 dark:text-gray-200 hover:bg-sky-700 dark:hover:bg-sky-600 hover:text-white py-1 px-3 rounded transition-colors duration-150">Articles</li>
				</Link>
			</ul>
		</div>
	);
};
