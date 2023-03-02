import { readFileSync, writeFileSync } from "fs"
import type { Apod, Apoy } from "./apods"
import { getYear } from "./time"

const apodsPath = "./apods.json"

export function readApods(): [Apoy] {
	/*
	 * readFileSync accepts an encoding as an option,
	 * however, while browsing online about encodings
	 * I fell down a rabbithole.
	 * toString suffices for now.
	 */
	return JSON.parse(readFileSync(apodsPath).toString())
}

export function writeApods(apods: [Apod]) {
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
