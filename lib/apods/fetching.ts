import axios from "axios"
import type { Apod } from "./apods"
import { getMissingApodsDateRange } from "./time"


const instance = axios.create({
	/*
	 * Since the API only has one endpoint,
	 * it'll be included in the baseURL.
	 */
	baseURL: " https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",
})

export async function getMissingApods(): Promise<[Apod] | null> {
	const [start, end] = getMissingApodsDateRange()

	try {
		const missing = await instance.get("", {
			params: {
				start_date: start,
				end_date: end,
			},
		})

		return missing.data
	} catch (error) {
		return null
	}
}
