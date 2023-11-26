import React from "react";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import { PortfolioType } from "@/types";
import Header from "../components/Header";

async function fetchAllPortfolios() {
	const res = await fetch("http://localhost:3000/api/portfolio", {
		// 更新が頻繁に行われるのでSSR
		// SSGなら "force-cache"
		cache: "no-store",
	});

	const data = await res.json();
	return data.portfolios;
}

const Portfolio = async () => {
	const portfolios = await fetchAllPortfolios();
	return (
		<>
			<Header />
			<div className="min-h-screen flex flex-col items-center bg-orange-100">
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
			</div>
			{/* <Sidebar /> */}
		</>
	);
};

export default Portfolio;
