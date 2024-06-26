export type TeamMember = {
	about: string;
	avatar: string;
	collectionId: string;
	collectionName: string;
	created: string;
	date: string;
	id: string;
	location: string;
	name: string;
	role: string;
	updated: string;
};

export type Socials = {
	id: string;
	created: string;
	updated: string;
	socialname: string;
	socialurl: string;
	socialplatform: string;
	enabled: boolean;
};

export type Hardware = {
	id: string;
	collectionId: string;
	collectionName: string;
	created: string;
	updated: string;
	name: string;
	url: string;
	ram: string;
	cores: string;
	disk: string;
	traffic: string;
};

export type Promotion = {
	button_text: string;
	button_url: string;
	collectionId: string;
	collectionName: string;
	color: string;
	created: string;
	id: string;
	text: string;
	updated: string;
};
