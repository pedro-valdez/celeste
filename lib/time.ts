import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import customParseFormat from "dayjs/plugin/customParseFormat"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(customParseFormat)


export const yearFormat = "YYYY"
export const dateFormat = "YYYY-MM-DD"
export const ONE_DAY = 86400 // one day in seconds

export function getYear(date: string) {
	return dayjs(date).format(yearFormat)
}

export function getTodayDate() {
	return dayjs().tz().format(dateFormat)
}

export function isDateValid(date: string) {
	return dayjs(date, dateFormat, true).isValid()
}
