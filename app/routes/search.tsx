import type { MetaFunction } from "@remix-run/node";
import ItemList from "../components/ItemList";
import SearchBar from "../components/SearchBar";

export const meta: MetaFunction = () => {
	return [
		{ title: "検索ページ" },
		{ name: "description", content: "商品を検索できます" },
	];
};

export default function Search() {
	const items = [
		{
			id: 1,
			title: "タイトル",
			description: "説明文説明文説明文説明文説明文説明文説明文",
			imageUrl: "https://via.placeholder.com/300",
		},
		{
			id: 2,
			title: "タイトル",
			description: "説明文説明文説明文説明文説明文説明文説明文",
			imageUrl: "https://via.placeholder.com/300",
		},
		{
			id: 3,
			title: "タイトル",
			description: "説明文説明文説明文説明文説明文説明文説明文",
			imageUrl: "https://via.placeholder.com/300",
		},
	];

	return (
		<div>
			<div className="flex justify-center">
				<div className="w-[700px]">
					<SearchBar />
					<div className="mt-4">
						<ItemList items={items} />
					</div>
				</div>
			</div>
		</div>
	);
}
