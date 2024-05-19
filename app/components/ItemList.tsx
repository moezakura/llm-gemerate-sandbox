import type React from "react";
import Item from "./Item";

type ItemProps = {
	title: string;
	description: string;
	imageUrl: string;
};

const ItemList: React.FC<{ items: ItemProps[] }> = ({ items }) => (
	<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
		{items.map((item) => (
			<Item key={item.title} item={item} />
		))}
	</div>
);

export default ItemList;
