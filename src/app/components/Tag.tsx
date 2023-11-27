"use client";
import React, { useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import { TagType } from "@/types";

const KeyCodes = {
	comma: 188,
	enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const Tag = () => {
	const [tags, setTags] = useState<TagType[]>([]);
	const handleDelete = (i: number) => {
		setTags(tags.filter((tag: TagType, index: number) => index !== i));
	};
	const handleAddition = (tag: TagType) => {
		setTags([...tags, tag]);
	};
	const handleDrag = (tag: TagType, currPos: number, newPos: number) => {
		const newTags = tags.slice();

		newTags.splice(currPos, 1);
		newTags.splice(newPos, 0, tag);

		setTags(newTags);
	};
	const handleTagClick = (index: number) => {
		console.log("The tag index" + index + "was clicked");
	};

	console.log(tags);

	return (
		<div>
			<ReactTags
				tags={tags}
				delimiters={delimiters}
				handleDelete={handleDelete}
				handleAddition={handleAddition}
				handleDrag={handleDrag}
				inputFieldPosition="bottom"
				handleTagClick={handleTagClick}
				placeholder="タグを入力"
				autocomplete
				classNames={{
					tags: "mt-2",
					tagInput: "",
					tagInputField: "rounded-md px-4 w-full py-2 mt-5",
					tag: "m-2 p-2 bg-white rounded-md border-2 border-orange-400",
					remove: "ml-2 cursor-pointer",
				}}
			/>
		</div>
	);
};

export default Tag;
