"use client";
import React from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

const Contact: React.FC = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		//TODO: フォームが送信されたときの処理をここに追加
	};

	return (
		<div className="bg-orange-100 p-6 rounded-md shadow-md min-h-screen flex flex-col justify-center">
			<h2 className="text-2xl font-semibold mb-4 text-orange-500">
				お問い合わせフォーム
			</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label htmlFor="name" className="text-orange-500 block mb-1">
						お名前
					</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="名前を入力"
						className="w-full px-3 py-2 border border-white rounded-md focus:outline-none focus:border-orange-300"
						required
					/>
				</div>
				<div>
					<label htmlFor="email" className="text-orange-500 block mb-1">
						メールアドレス
					</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="メールアドレスを入力"
						className="w-full px-3 py-2 border border-white rounded-md focus:outline-none focus:border-orange-300"
						required
					/>
				</div>
				<div>
					<label htmlFor="message" className="text-orange-500 block mb-1">
						メッセージ
					</label>
					<ReactTextareaAutosize
						id="message"
						name="message"
						placeholder="本文を入力"
						cacheMeasurements
						minRows={10}
						onHeightChange={(height) => console.log(height)}
						required
						className="w-full px-3 py-2 border border-white rounded-md focus:outline-none focus:border-orange-300"
					/>
				</div>
				<button
					type="submit"
					className="w-full bg-white text-orange-500 py-2 px-4 rounded-md hover:bg-orange-300 transition duration-300"
				>
					送信する
				</button>
			</form>
		</div>
	);
};

export default Contact;
