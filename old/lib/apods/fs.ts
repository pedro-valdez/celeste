import { readFileSync, writeFileSync } from "fs"
import type { Apod, Apoy } from "./apods"
import { getYear } from "@/lib/time"

const apodsPath = "lib/apods/apods.json"

export function readApods(): Apoy[] {
	/*
	 * readFileSync accepts an encoding as an option,
	 * however, while browsing online about encodings
	 * I fell down a rabbithole.
	 * toString suffices for now.
	 */
	return JSON.parse(readFileSync(apodsPath).toString())
}

function writeApods(apods: Apoy[]) {
	writeFileSync(apodsPath, JSON.stringify(apods))
}

export function readApodAtDate(date: string): Apod | null {
	const year = getYear(date)
	const apods = readApods()
	const matchYear = (apoy: Apoy) => apoy.year === year
	const matchDate = (apod: Apod) => apod.date === date

	const apoy = apods.find(matchYear)?.apods

	if (!apoy) { return null }

	const apod = apoy.find(matchDate)

	if (!apod) { return null }

	return apod
}

export function readLastApod(): Apod {
	const apods = readApods()
	const lastApoy = apods[apods.length - 1].apods
	const lastAopd = lastApoy[lastApoy.length - 1]

	return lastAopd
}

function mergeApods(missing: Apod[]) {
	const apods = readApods()
	const matchYear = (apod: Apod) => (apoy: Apoy) => getYear(apod.date) === apoy.year

	missing.forEach(apod => {
		const apoy = apods.find(matchYear(apod))

		if (!apoy) {
			const missingApoy: Apoy = { year: getYear(apod.date), apods: [apod], }

			apods.push(missingApoy)
		} else { apoy.apods.push(apod) }
	})

	return apods
}

export function writeUpdate(missing: Apod[]) {
	const apods = mergeApods(missing)

	writeApods(apods)
}
