import React from "react";
import { createPost } from "../api/post.api";
import { useSelector } from "react-redux";
const ThreadInput = ({
	fetchPosts,
}: {
	fetchPosts: () => Promise<void>;
}): JSX.Element => {
	const { user } = useSelector((state: any) => state.authReducer);

	const [data, setData] = React.useState({ title: "", description: ""});

	const handleChange = (e: any) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: any) => {
		console.log("👻 -> file: ThreadInput.tsx:12 -> handleSubmit -> data", {
			...data,
			userId: user._id,
		});
		console.log(user)
		const res = await createPost({ ...data, userId: user._id });
		console.log(
			"👻 -> file: ThreadInput.tsx:14 -> handleSubmit -> res",
			res.data.message
		);

		fetchPosts();
	};
	return (
		<section className='text-gray-600 dark:text-gray-300 body-font w-full px-4'>
			<div className='max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 my-6 transition-colors duration-300'>
				<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Create a New Thread</h3>
				<div className='space-y-4'>
					<div>
						<label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
							Title
						</label>
						<input
							type='text'
							name='title'
							className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none placeholder-gray-400 dark:placeholder-gray-500'
							placeholder="Enter discussion title..."
							onChange={handleChange}
							value={data.title}
						/>
					</div>
					<div>
						<label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
							Description
						</label>
						<textarea
							name='description'
							rows={4}
							className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none placeholder-gray-400 dark:placeholder-gray-500'
							placeholder="Describe what you want to discuss..."
							onChange={handleChange}
							value={data.description}
						/>
					</div>
					<div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between pt-2">
						<span className='text-xs text-gray-500 dark:text-gray-400'>
							Share your thoughts with the Fitfusion community
						</span>
						<button
							type='submit'
							className='w-full sm:w-auto inline-flex justify-center text-white bg-indigo-500 hover:bg-indigo-600 border-0 py-2 px-6 focus:outline-none rounded-lg text-base font-semibold shadow-sm transition duration-150'
							onClick={handleSubmit}>
							Create Thread
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ThreadInput;
