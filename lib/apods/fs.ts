import { readFile } from "fs/promises"
import path from "path"
import type { Apod } from "."

const apodsPath = 'lib/apods/all/'

export async function readApod(date: string): Promise<Apod | null> {
	const apodPath = path.join(apodsPath, `${date}.json`)

	try {
		const file = await readFile(apodPath, { encoding: "utf8" })
		const apod = JSON.parse(file)

		return apod
	} catch { return null }
}
