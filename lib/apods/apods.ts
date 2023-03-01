export interface Apod {
	date: string,
	explanation: string,
	hdurl?: string,
	media_type: string,
	service_version: string,
	title: string,
	url?: string,
	copyright?: string,
}

// APOY stands for Astronomy Pictures of the Year
export interface Apoy {
	year: string,
	apods: [Apod],
}
