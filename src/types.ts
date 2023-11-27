export type PostType = {
	id: number;
	title: string;
	description: string;
	overview: string;
	date: Date;
	tag: string[];
};

export type PortfolioType = {
	id: number;
	title: string;
	description: string;
	overview: string;
	date: Date;
	tag: string[];
};

export type TagType = {
	id: string;
	text: string;
};
