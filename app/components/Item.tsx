import type React from "react";

type Item = {
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
		<h3 className="text-xl font-bold mb-2">{item.title}</h3>
		<p className="text-gray-600 text-sm">{item.description}</p>
	</div>
);

export default Item;
