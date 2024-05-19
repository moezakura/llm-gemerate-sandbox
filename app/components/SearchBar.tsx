import type React from "react";

const SearchBar: React.FC = () => {
	return (
		<div className="flex items-center border rounded-md shadow-sm mb-8">
			<input
				type="text"
				placeholder="キーワードを入力してください。"
				className="w-full px-4 py-2 rounded-l-md focus:outline-none focus:ring focus:ring-blue-300"
			/>
			<button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clipRule="evenodd"
					/>
				</svg>
			</button>
		</div>
	);
};

export default SearchBar;
