import { Link } from "@remix-run/react";
import type React from "react";

type Item = {
	id: number;
	title: string;
	description: string;
	imageUrl: string;
};

const Item: React.FC<{ item: Item }> = ({ item }) => (
	<div className="border rounded-lg p-4 shadow-md">
		<img
			src={item.imageUrl}
			alt={item.title}
			className="w-full h-48 object-cover rounded-lg mb-4"
		/>
		<div className="flex flex-col">
			<h3 className="text-xl font-bold mb-2">{item.title}</h3>
			<p className="text-gray-600 text-sm">{item.description}</p>
			<Link to={`/detail/${item.id}`}>
				<button className="mt-4 self-end px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
					詳細
				</button>
			</Link>
		</div>
	</div>
);

export default Item;
