"use client";
import React from "react";
import { animateScroll } from "react-scroll";

const ScrollUp = () => {
	const scrollToTop = () => {
		animateScroll.scrollToTop();
	};
	return (
		<div className="rounded-full overflow-hidden bg-orange-500 animate-bounce">
			<div className="">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-12 h-12"
					onClick={scrollToTop}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M4.5 15.75l7.5-7.5 7.5 7.5"
					/>
				</svg>
			</div>
		</div>
	);
};

export default ScrollUp;
