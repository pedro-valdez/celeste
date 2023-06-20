import { fetchApod } from "./fetch";
import { readApod } from "./fs";

export type Apod = {
	date: string,
	explanation: string,
	hdurl?: string,
	media_type: "image" | "video" | "other",
	service_version: string,
	title: string,
	url?: string,
	copyright?: string,
}

export async function getApod(date: string): Promise<Apod | null> {
	const localApod = await readApod(date)
	if (localApod) { return localApod }

	const foreignApod = await fetchApod(date)
	return foreignApod
}
