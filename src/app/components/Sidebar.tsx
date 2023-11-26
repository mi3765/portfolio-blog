import React from "react";

const Sidebar = () => {
	return (
		<div className="mr-10">
			<div className="bg-white p-4 rounded-md mb-5">
				<h1 className="text-xl font-semibold">Profile</h1>
				<hr className="mt-1 mb-5" />
				<div className="">
					<div className="text-center">
						<img
							src=""
							alt=""
							className="w-[100px] h-[100px] rounded-full mb-2"
						/>
						<h2>水野 慧亞</h2>
					</div>
					<div className="mt-5">
						<h2 className="text-orange-500 font-semibold">生まれ</h2>
						<hr className="mt-1 mb-2" />
						<p className="text-sm">
							岐阜県美濃市
							<br />
							美濃市/大垣市/羽島市
						</p>
					</div>
					<div className="mt-2">
						<h2 className="text-orange-500 font-semibold">学歴</h2>
						<hr className="mt-1 mb-2" />
						<p className="text-sm">
							岐阜協立大学 経営学部 情報メディア学科 卒業見込み
						</p>
					</div>
					<div className="mt-2">
						<h2 className="text-orange-500 font-semibold">技術スタック</h2>
						<hr className="mt-1 mb-2" />
						<p className="text-sm">
							HTML/CSS/Tailwind
							<br />
							JavaScript/TypeScript/React/Next.js
							<br />
							Go/C++/PHP
							<br />
							MySQL/MongoDB/Firebase/Supabase
							<br />
							ITパスポート/基本情報技術者
							<br />
							AtCoder Rating 200
						</p>
					</div>
					<button className="mt-2 text-xs bg-orange-500 rounded-3xl px-6 py-2 text-white cursor hover:bg-black">
						Read More
					</button>
				</div>
			</div>
			<div className="bg-white p-4 rounded-md mb-5">
				<h1 className="text-xl font-semibold">Popular Articles</h1>
				<hr className="mt-1 mb-5" />
			</div>
			<div className="bg-white p-4 rounded-md mb-5">
				<h1 className="text-xl font-semibold">Category</h1>
				<hr className="mt-1 mb-5" />
			</div>
			<div className="bg-white p-4 rounded-md">
				<h1 className="text-xl font-semibold">Agenda</h1>
				<hr className="mt-1 mb-5" />
			</div>
		</div>
	);
};

export default Sidebar;
