import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">404 - Not Found</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Oops! The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
