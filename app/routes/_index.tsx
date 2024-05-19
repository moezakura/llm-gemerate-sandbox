import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [
		{ title: "ほげほげ" },
		{ name: "description", content: "ほげほげようこそ" },
	];
};

export default function Index() {
	return (
		<div className="h-screen flex flex-col items-center justify-center">
			<h1 className="text-3xl font-bold mb-8">ほげほげへようこそ。</h1>
			<Link to="/search">
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					利用を開始する
				</button>
			</Link>
		</div>
	);
}
