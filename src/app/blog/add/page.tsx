"use client";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import ReactTextareaAutosize from "react-textarea-autosize";

const postBlog = async (
	title: string | undefined,
	description: string | undefined
) => {
	const res = await fetch("http://localhost:3000/api/blog", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ title, description }),
	});
	return res.json();
};

const PostBlog = () => {
	const router = useRouter();
	const titleRef = useRef<HTMLInputElement | null>(null);
	const descriptionRef = useRef<HTMLTextAreaElement | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		toast.loading("投稿中です", { id: "1" });

		await postBlog(titleRef.current?.value, descriptionRef.current?.value);

		toast.success("投稿に成功しました", { id: "1" });
		router.push("/");
		router.refresh();
	};

	return (
		<>
			<Toaster />
			<div className="w-full flex bg-orange-100 h-[100vh] py-10">
				<div className="flex flex-col justify-center items-center mx-auto ">
					<div className="bg-white rounded-lg my-10">
						<p className="text-2xl text-orange-500 font-bold p-3">
							ブログ新規作成
						</p>
					</div>

					<form onSubmit={handleSubmit}>
						<input
							ref={titleRef}
							placeholder="タイトルを入力"
							type="text"
							className="rounded-md px-4 w-full py-2 my-2"
						/>
						<input
							ref={titleRef} // ここも修正
							placeholder="タグを入力"
							type="text"
							className="rounded-md px-4 w-full py-2 my-2"
						/>
						{/* AutoResizeTextarea を使ってテキストエリアを実装 */}
						<ReactTextareaAutosize
							placeholder="本文を入力"
							cacheMeasurements
							minRows={10}
							onHeightChange={(height) => console.log(height)}
							className="rounded-md px-4 py-2 w-full my-2"
						/>
						<button className="text-white px-4 py-2 bg-orange-500 rounded-lg m-auto hover:bg-orange-600">
							投稿
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default PostBlog;
