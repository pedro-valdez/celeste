import { getMissingApods } from "./fetching";
import { readApodAtDate, readApods, readLastApod, writeUpdate } from "./fs";
import { isTodayAfterLastApod } from "./time";

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
	apods: Apod[],
}

async function updateApods() {
	const isUpdateNeeded = isTodayAfterLastApod()

	if (isUpdateNeeded) {
		const missing = await getMissingApods()

		if (missing) { writeUpdate(missing) }
	}
}

export async function getLatestApod(): Promise<Apod> {
	await updateApods()

	return readLastApod()
}

export async function getAllApods(): Promise<Apoy[]> {
	await updateApods()

	return readApods()
}

export async function getApodAtDate(date: string): Promise<Apod | null> {
	await updateApods()

	return readApodAtDate(date)
}
