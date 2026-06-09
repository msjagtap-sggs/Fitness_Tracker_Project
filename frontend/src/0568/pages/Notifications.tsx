import React, { useState } from "react";

interface Notification {
	id: number;
	type: "workout" | "reminder" | "achievement" | "system";
	title: string;
	message: string;
	time: string;
	read: boolean;
}

const INITIAL_NOTIFICATIONS: Notification[] = [
	{
		id: 1,
		type: "achievement",
		title: "🏆 New Achievement Unlocked!",
		message: "You completed 7 workouts in a row. Keep it up!",
		time: "2 hours ago",
		read: false,
	},
	{
		id: 2,
		type: "reminder",
		title: "⏰ Workout Reminder",
		message: "Don't forget your scheduled Chest workout today at 6:00 PM.",
		time: "5 hours ago",
		read: false,
	},
	{
		id: 3,
		type: "workout",
		title: "💪 Workout Summary",
		message: "You burned an estimated 420 kcal in yesterday's Back session.",
		time: "1 day ago",
		read: true,
	},
	{
		id: 4,
		type: "system",
		title: "📊 Weekly Report Ready",
		message: "Your weekly performance report is available. Check your charts now.",
		time: "2 days ago",
		read: true,
	},
	{
		id: 5,
		type: "reminder",
		title: "💧 Stay Hydrated",
		message: "You haven't logged water intake today. Remember to stay hydrated!",
		time: "3 days ago",
		read: true,
	},
];

const typeColors: Record<string, string> = {
	achievement: "bg-yellow-100 border-yellow-400 text-yellow-800",
	reminder: "bg-blue-100 border-blue-400 text-blue-800",
	workout: "bg-green-100 border-green-400 text-green-800",
	system: "bg-gray-100 border-gray-400 text-gray-800",
};

const typeDot: Record<string, string> = {
	achievement: "bg-yellow-400",
	reminder: "bg-blue-400",
	workout: "bg-green-400",
	system: "bg-gray-400",
};

const Notifications = () => {
	const [notifications, setNotifications] =
		useState<Notification[]>(INITIAL_NOTIFICATIONS);

	const unreadCount = notifications.filter((n) => !n.read).length;

	const markAllRead = () => {
		setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
	};

	const markRead = (id: number) => {
		setNotifications((prev) =>
			prev.map((n) => (n.id === id ? { ...n, read: true } : n))
		);
	};

	const deleteNotification = (id: number) => {
		setNotifications((prev) => prev.filter((n) => n.id !== id));
	};

	return (
		<div className='p-6 max-w-3xl mx-auto bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl dark:bg-gray-800 dark:bg-opacity-80'>
			{/* Header */}
			<div className='flex items-center justify-between mb-6'>
				<div>
					<h1 className='text-2xl font-bold text-gray-800 dark:text-white'>Notifications</h1>
					{unreadCount > 0 && (
						<p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
							You have{" "}
							<span className='font-semibold text-blue-600'>{unreadCount}</span>{" "}
							unread notification{unreadCount > 1 ? "s" : ""}
						</p>
					)}
					{unreadCount === 0 && (
						<p className='text-sm text-gray-500 mt-1'>All caught up! ✅</p>
					)}
				</div>
				{unreadCount > 0 && (
					<button
						onClick={markAllRead}
						className='px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200'>
						Mark all as read
					</button>
				)}
			</div>

			{/* Notification List */}
			{notifications.length === 0 ? (
				<div className='flex flex-col items-center justify-center py-20 text-gray-400'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='w-16 h-16 mb-4 opacity-40'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
						/>
					</svg>
					<p className="text-lg font-medium dark:text-gray-200">No notifications</p>
					<p className="text-sm dark:text-gray-400">You're all caught up!</p>
				</div>
			) : (
				<div className="space-y-3 max-h-[70vh] overflow-y-auto">
					{notifications.map((notification) => (
						<div
							key={notification.id}
							className={`relative flex items-start gap-4 p-4 rounded-lg border-l-4 shadow-sm transition-all duration-200 cursor-pointer ${
								typeColors[notification.type]
							} ${!notification.read ? "opacity-100" : "opacity-70"}`}
							onClick={() => markRead(notification.id)}>
							{/* Unread dot */}
							{!notification.read && (
								<span
									className={`absolute top-4 right-4 w-2.5 h-2.5 rounded-full ${
										typeDot[notification.type]
									}`}
								/>
							)}

							{/* Content */}
							<div className='flex-1 min-w-0 pr-4'>
								<p className='font-semibold text-sm'>{notification.title}</p>
								<p className='text-sm mt-1 leading-relaxed'>
									{notification.message}
								</p>
								<p className='text-xs mt-2 opacity-60'>{notification.time}</p>
							</div>

							{/* Delete button */}
							<button
								onClick={(e) => {
									e.stopPropagation();
									deleteNotification(notification.id);
								}}
								className='flex-shrink-0 p-1 rounded hover:bg-black hover:bg-opacity-10 transition-colors duration-150'
								title='Dismiss'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='2'
									stroke='currentColor'
									className='w-4 h-4'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							</button>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Notifications;
