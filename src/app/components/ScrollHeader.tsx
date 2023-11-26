import React from "react";
import { Link } from "react-scroll";

const ScrollHeader = () => {
	return (
		<>
			{/* スマホサイズ */}
			<div className="hidden sm:flex items-center justify-center gap-2 md:gap-8">
				<Link
					activeClass="active"
					to="home"
					spy={true}
					smooth={true}
					offset={-70}
					duration={800}
				>
					Home
				</Link>
				<Link
					activeClass="active"
					to="profile"
					spy={true}
					smooth={true}
					offset={-70}
					duration={800}
				>
					Profile
				</Link>
				<Link
					activeClass="active"
					to="portfolio"
					spy={true}
					smooth={true}
					offset={-70}
					duration={800}
				>
					Portfolio
				</Link>
				<Link
					activeClass="active"
					to="blog"
					spy={true}
					smooth={true}
					offset={-70}
					duration={800}
				>
					Blog
				</Link>
				<Link
					activeClass="active"
					to="contact"
					spy={true}
					smooth={true}
					offset={-70}
					duration={800}
				>
					Contact
				</Link>
			</div>

			{/* PCサイズ */}
			<div>
				<Link
					activeClass="active"
					to="home"
					spy={true}
					smooth={true}
					offset={-70}
					duration={800}
					className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
				>
					Home
				</Link>
				<Link
					activeClass="active"
					to="profile"
					spy={true}
					smooth={true}
					offset={-70}
					duration={800}
					className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
				>
					Profile
				</Link>
				<Link
					activeClass="active"
					to="portfolio"
					spy={true}
					smooth={true}
					offset={-70}
					duration={800}
					className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
				>
					Portfolio
				</Link>
				<Link
					activeClass="active"
					to="blog"
					spy={true}
					smooth={true}
					offset={-70}
					duration={800}
					className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
				>
					Blog
				</Link>
				<Link
					activeClass="active"
					to="contact"
					spy={true}
					smooth={true}
					offset={-70}
					duration={800}
					className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
				>
					Contact
				</Link>
			</div>
		</>
	);
};

export default ScrollHeader;
