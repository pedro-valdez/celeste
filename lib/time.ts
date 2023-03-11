import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import customParseFormat from "dayjs/plugin/customParseFormat"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(customParseFormat)
dayjs.tz.setDefault("EST")


export const yearFormat = "YYYY"
export const dateFormat = "YYYY-MM-DD"
const humanFormat = "MMMM D, YYYY"
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

export function humanDate(date: string): string {
	const day = dayjs(date).tz()
	const isToday = day.format(dateFormat) === getTodayDate()

	if (isToday) {
		return "the Day"
	}

	return day.format(humanFormat)
}
