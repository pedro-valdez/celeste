import { readFileSync, writeFileSync } from "fs"
import type { Apod, Apoy } from "./apods"

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
