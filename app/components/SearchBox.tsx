import type React from "react";

const SearchBox: React.FC = () => (
	<div className="flex items-center border rounded-md mb-4">
		<input
			type="text"
			className="w-full px-4 py-2 text-gray-700 bg-white border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
			placeholder="けんさくワード"
		/>
		<button
			className="flex items-center justify-center px-4 rounded-r-md"
			type="button"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6 text-gray-400"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<title>検索ボタン</title>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/>
			</svg>
		</button>
	</div>
);

export default SearchBox;
