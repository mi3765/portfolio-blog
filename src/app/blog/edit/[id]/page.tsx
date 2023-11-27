"use client";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import ReactTextareaAutosize from "react-textarea-autosize";
import Tag from "@/app/components/Tag";
import Header from "@/app/components/Header";

const editBlog = async (
	// undefinedの可能性
	title: string | undefined,
	description: string | undefined,
	overview: string | undefined,
	id: number
) => {
	const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
		method: "PUT",
		// JSONですよという印
		headers: {
			"Content-Type": "application/json",
		},
		// JSON形式にする
		body: JSON.stringify({ title, description, overview, id }),
	});
	return res.json();
};

const getBlogById = async (id: number) => {
	const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
		method: "GET",
	});
	const data = await res.json();
	console.log(data);
	return data.post;
};

const deleteBlog = async (id: number) => {
	const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
		method: "DELETE",
		// JSONですよという印
		headers: {
			"Content-Type": "application/json",
		},
	});
	return res.json();
};

// URLからidを取得
const EditBlog = ({ params }: { params: { id: number } }) => {
	const router = useRouter();
	// input
	const titleRef = useRef<HTMLInputElement | null>(null);
	// textarea
	const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
	const overviewRef = useRef<HTMLTextAreaElement | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// 投稿のロードを表示
		toast.loading("編集中です", { id: "1" });

		// nullの可能性があるので ?
		// console.log(titleRef.current?.value);
		// console.log(descriptionRef.current?.value);
		await editBlog(
			titleRef.current?.value,
			descriptionRef.current?.value,
			overviewRef.current?.value,
			params.id
		);
		// 新規投稿時homeに戻り、ページをリフレッシュ

		toast.success("編集に成功しました", { id: "1" });

		router.push("/");
		router.refresh();
	};

	const handleDelete = async () => {
		toast.loading("削除中です", { id: "1" });
		await deleteBlog(params.id);
		toast.success("削除に成功しました", { id: "1" });
		router.push("/");
		router.refresh();
	};

	useEffect(() => {
		getBlogById(params.id)
			.then((data) => {
				// 存在するか確認
				toast.loading("データを取得中", { id: "1" });
				if (titleRef.current && descriptionRef.current && overviewRef.current) {
					titleRef.current.value = data.title;
					descriptionRef.current.value = data.description;
					overviewRef.current.value = data.overview;
				}
				toast.success("取得に成功しました", { id: "1" });
			})
			.catch((err) => {
				toast.error("エラーが発生しました", { id: "1" });
			});
	}, []);

	return (
		<>
			<Header />
			<Toaster />
			<div className="w-full h-full m-auto flex bg-orange-100 py-10">
				<div className="flex flex-col justify-center items-center m-auto">
					<div className="bg-white rounded-md my-10">
						<p className="text-2xl text-orange-500 font-bold p-3">
							ブログの編集
						</p>
					</div>
					<form onSubmit={handleSubmit}>
						<input
							ref={titleRef}
							placeholder="タイトルを入力"
							type="text"
							className="rounded-md px-4 w-full py-2 my-2"
						/>
						<ReactTextareaAutosize
							ref={overviewRef}
							placeholder="概要を入力"
							cacheMeasurements
							minRows={5}
							onHeightChange={(height) => console.log(height)}
							className="rounded-md px-4 py-2 w-full my-2"
						/>
						<div className="rounded-md px-4 w-full py-2 my-2 border bg-white">
							<Tag />
						</div>
						<ReactTextareaAutosize
							ref={descriptionRef}
							placeholder="本文を入力"
							cacheMeasurements
							minRows={10}
							onHeightChange={(height) => console.log(height)}
							className="rounded-md px-4 py-2 w-full my-2"
						/>
						<button className="px-4 py-2 bg-green-300 rounded-lg m-auto hover:bg-slate-100">
							更新
						</button>
						<button
							onClick={handleDelete}
							className="ml-2 px-4 py-2 bg-red-400 rounded-lg m-auto hover:bg-slate-100"
						>
							削除
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default EditBlog;
