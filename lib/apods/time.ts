import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import customParseFormat from "dayjs/plugin/customParseFormat"
import { readLastApod } from "./fs"


dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(customParseFormat)
/*
 * Since the NASA headquarters are in Washington D.C.
 * I decided to use EST as the timezone.
 */
dayjs.tz.setDefault("EST")

const yearFormat = "YYYY"
const dateFormat = "YYYY-MM-DD"
export const ONE_DAY = 86400 // one day in seconds

export function getYear(date: string) {
	return dayjs(date).format(yearFormat)
}

export function getTodayDate() {
	return dayjs().tz().format(dateFormat)
}

export function getMissingApodsDateRange(): [string, string] {
	const start = dayjs.tz(readLastApod().date).add(1, "day").format(dateFormat)
	const end = getTodayDate()

	return [start, end]
}

export function isTodayAfterLastApod() {
	const last = dayjs.tz(readLastApod().date)
	const today = dayjs().tz().startOf("day")

	return today.isAfter(last)
}

export function isDateValid(date: string) {
	return dayjs(date, dateFormat, true).isValid()
}

export function isDateInRange(date: string) {
	const start = dayjs.tz("1995-06-16")
	const end = dayjs().tz().startOf("day")
	const moment = dayjs.tz(date)

	const isAfterStart = !moment.isBefore(start)
	const isBeforeEnd = !moment.isAfter(end)

	return isAfterStart && isBeforeEnd
}
