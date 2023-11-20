"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const getBlogById = async (id: number) => {
	const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
		method: "GET",
	});

	const data = await res.json();
	return data.post;
};

const BlogById = ({ params }: { params: { id: number } }) => {
	const [post, setPost] = useState<any>({});

	// input
	const titleRef = useRef<HTMLHeadingElement | null>(null);
	// textarea
	const descriptionRef = useRef<HTMLHeadingElement | null>(null);

	useEffect(() => {
		getBlogById(params.id)
			.then((data) => {
				setPost(data);

				// 存在するか確認
				if (titleRef.current && descriptionRef.current) {
					titleRef.current.innerText = data.title;
					descriptionRef.current.innerText = data.description;
				}
			})
			.catch((err) => {
				console.error(err);
			});
	}, [params.id]);

	return (
		<main className="w-full h-[100vh] bg-orange-100 py-10">
			<div className="md:w-2/4 sm:w-3/4 m-auto p-4 my-5 rounded-lg bg-white">
				<h1 className="text-orange-500 text-center text-2xl font-extrabold">
					Full Stack Blog
				</h1>
			</div>

			<div className="w-full flex flex-col justify-center items-center">
				<div className="w-3/4 p-4 rounded-md mx-3 my-2 bg-white flex flex-col justify-center">
					<div className="flex items-center my-3">
						<div className="mr-auto">
							<h2 ref={titleRef} className="mr-auto text-2xl"></h2>
						</div>
						<Link
							href={`/blog/edit/${params.id}`}
							className="px-4 py-1 text-center text-xl rounded-md bg-orange-500 hover:bg-orange-600 text-white"
						>
							編集
						</Link>
					</div>

					<div className="mr-auto my-1">
						<blockquote className="font-bold text-slate-700">
							{new Date(post.date).toDateString()}
						</blockquote>
					</div>

					<div className="mr-auto my-1">
						<h2 ref={descriptionRef}></h2>
					</div>
				</div>
			</div>
		</main>
	);
};

export default BlogById;
