import { Apod, ApodError } from "."

const baseUrl = "https://api.nasa.gov"
const endpoint = "planetary/apod"
/*
 * WARNING:
 * API keys are usually private, this one is a demo key,
 * so for the time being it is ok to have it here.
 */
const apiKey = process.env.NASA_API_KEY!
const url = new URL(endpoint, baseUrl)
url.searchParams.append("api_key", apiKey)

function makeApodUrl(date: string) : URL {
	const apodUrl = new URL(url.href)
	apodUrl.searchParams.append("date", date)

	return apodUrl
}

export async function fetchApod(date: string): Promise<Apod | ApodError | null> {
	const apodUrl = makeApodUrl(date)

	try {
		const resp = await fetch(apodUrl.href)
		const apod = await resp.json()

		let error = apod.code ? true : false

		return { ...apod, error }
	} catch{ return null }
}
