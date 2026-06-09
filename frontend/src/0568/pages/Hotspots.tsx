import React from "react";
import { getPosts } from "../api/post.api";
import { PostCard } from "../components/PostCard";

const Hotspots = () => {
	const [posts, setPosts] = React.useState<any[]>([]);
	const [loading, setLoading] = React.useState<boolean>(false);

	const fetchPosts = async () => {
		setLoading(true);
		try {
			const res = await getPosts();
			// Sort by number of comments descending to get "Hot" posts
			const sortedPosts = [...res.data.posts].sort((a, b) => b.comments.length - a.comments.length);
			setPosts(sortedPosts);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	React.useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<div className="w-full h-full p-6 bg-slate-100 dark:bg-gray-900">
			<div className="max-w-4xl mx-auto">
				<div className="text-center my-6">
					<h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
						🔥 Hotspots & Trending Topics
					</h1>
					<p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
						Explore the most active discussion threads in the Fitfusion community.
					</p>
				</div>
				<PostCard
					posts={posts}
					loading={loading}
					fetchPosts={fetchPosts}
				/>
			</div>
		</div>
	);
};

export default Hotspots;
