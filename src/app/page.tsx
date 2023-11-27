import { PostType, PortfolioType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { Suspense } from "react";

async function fetchAllBlogs() {
	const res = await fetch("http://localhost:3000/api/blog", {
		// 更新が頻繁に行われるのでSSR
		// SSGなら "force-cache"
		cache: "no-store",
	});

	const data = await res.json();
	return data.posts;
}

async function fetchAllPortfolios() {
	const res = await fetch("http://localhost:3000/api/portfolio", {
		// 更新が頻繁に行われるのでSSR
		// SSGなら "force-cache"
		cache: "no-store",
	});

	const data = await res.json();
	return data.portfolios;
}

export default async function Home() {
	const posts = await fetchAllBlogs();
	const portfolios = await fetchAllPortfolios();
	return (
		<Suspense fallback={<Loading />}>
			<Header />
			<main className="h-full bg-orange-100 flex">
				<div className=" bg-orange-100">
					<div
						className="min-h-screen min-w-screen p-4 rounded-lg bg-white flex justify-center items-center"
						id="profile"
					>
						<div className="flex flex-col">
							<h1 className="text-orange-500 text-8xl font-extrabold mb-5">
								Ea Mizuno
								<br />
							</h1>
							<p className="text-3xl text-orange-500 font-extrabold">
								Gihu Kyoritsu University Bachelor 3.
								<br />I aspire to become a front-end engineer.
							</p>
						</div>
					</div>

					{/* Link */}

					<div
						className="min-h-screen min-w-screen flex flex-col justify-center items-center"
						id="portfolio"
					>
						<h1 className="text-4xl font-semibold my-5">Portfolio</h1>
						<div className="flex items-center justify-center ">
							<div className="grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-5  mx-5">
								{portfolios.map((portfolio: PortfolioType) => (
									<div className="card">
										<div
											className="flex flex-col bg-white rounded-xl overflow-hidden"
											key={portfolio.id}
										>
											<div className="">
												<img
													src="スクリーンショット 2023-11-19 14.57.46.png"
													alt=""
													className="img"
												/>
												<div className="p-5">
													<Link href={`/portfolio/${portfolio.id}`}>
														<h1 className="my-2 mr-auto font-semibold text-2xl hover:text-orange-500">
															{portfolio.title}
														</h1>
													</Link>
													<Link
														href={`/portfolio/edit/${portfolio.id}`}
														className="px-4 py-1 text-center text-lg bg-orange-500 text-white rounded-md hover:bg-black"
													>
														編集
													</Link>
													<p className="text-slate-500 text-lg mt-3">
														{portfolio.overview}
													</p>
													<blockquote className="font-bold text-slate-700">
														{/* Date型が割り当てられないためstring型にする */}
														{new Date(portfolio.date).toDateString()}
													</blockquote>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
						<Link href="/portfolio">
							<button className="bg-orange-500 text-white rounded-3xl mt-5 mb-10 px-10 py-2 hover:bg-black">
								View All
							</button>
						</Link>
					</div>
					<div
						className="min-h-screen min-w-screen  flex flex-col justify-center items-center"
						id="blog"
					>
						<h1 className="text-4xl font-semibold my-5">Blog</h1>
						<div className="flex items-center justify-center ">
							<div className="grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-5 mx-5">
								{posts.map((post: PostType) => (
									<div className="card">
										<div
											className="flex flex-col bg-white rounded-xl overflow-hidden"
											key={post.id}
										>
											<div className="">
												<img
													src="スクリーンショット 2023-11-19 14.57.46.png"
													alt=""
													className="img"
												/>
												<div className="p-5">
													<Link href={`/blog/${post.id}`}>
														<h1 className="my-2 mr-auto font-semibold text-2xl hover:text-orange-500">
															{post.title}
														</h1>
													</Link>
													<Link
														href={`/blog/edit/${post.id}`}
														className="px-4 py-1 text-center text-lg bg-orange-500 text-white rounded-md hover:bg-black"
													>
														編集
													</Link>
													<p className="text-slate-500 text-lg mt-3">
														{post.overview}
													</p>
													<blockquote className="font-bold text-slate-700">
														{/* Date型が割り当てられないためstring型にする */}
														{new Date(post.date).toDateString()}
													</blockquote>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
						<Link href="/blog">
							<button className="bg-orange-500 text-white rounded-3xl mt-5 mb-10 px-10 py-2 hover:bg-black">
								View All
							</button>
						</Link>
					</div>
					<Footer />
				</div>
				{/* <Sidebar /> */}
			</main>
		</Suspense>
	);
}
