import { PostType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";

async function fetchAllBlogs() {
	const res = await fetch("http://localhost:3000/api/blog", {
		// 更新が頻繁に行われるのでSSR
		// SSGなら "force-cache"
		cache: "no-store",
	});

	const data = await res.json();
	return data.posts;
}

export default async function Home() {
	const posts = await fetchAllBlogs();
	return (
		<>
			<Header />
			<main className="w-full h-full bg-orange-100 py-10">
				<div className="md:w-2/4 sm:w-3/4 m-auto p-4 rounded-lg bg-white ">
					<h1 className="text-orange-500 text-center text-2xl font-extrabold">
						Full Stack Blog
					</h1>
				</div>
				{/* Link */}
				<div className="flex my-5">
					<Link
						href={"/blog/add"}
						className="text-orange-500 md:w-1/6 sm:w-2/4 text-center rounded-md p-2 m-auto bg-white hover:bg-orange-500 hover:text-white font-semibold"
					>
						ブログ新規作成
					</Link>
				</div>

				<div className="w-full flex flex-col justify-center items-center">
					{posts.map((post: PostType) => (
						<div
							key={post.id}
							className="w-3/4 p-4 rounded-md mx-3 my-2 bg-white flex flex-col justify-center"
						>
							<div className="flex items-center my-3">
								<Link href={`/blog/${post.id}`} className="mr-auto">
									<h1 className="mr-auto font-semibold text-2xl hover:text-orange-500">
										{post.title}
									</h1>
								</Link>
								<Link
									href={`/blog/edit/${post.id}`}
									className="px-4 py-1 text-center text-xl bg-orange-500 text-white rounded-md hover:bg-black"
								>
									編集
								</Link>
							</div>

							<div className="mr-auto my-1">
								<blockquote className="font-bold text-slate-700">
									{/* Date型が割り当てられないためstring型にする */}
									{new Date(post.date).toDateString()}
								</blockquote>
							</div>
						</div>
					))}
				</div>
			</main>
		</>
	);
}
