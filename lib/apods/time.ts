import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import customParseFormat from "dayjs/plugin/customParseFormat"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(customParseFormat)
dayjs.tz.setDefault("EST")

const dateFormat = "YYYY-MM-DD"
const humanFormat = "MMMM D, YYYY"
export const startDate = dayjs.tz("1995-06-16").format(dateFormat)

export function getTodayDate() {
	return dayjs().tz().format(dateFormat)
}

export function isDateValid(date: string) {
	return dayjs(date, dateFormat, true).isValid()
}

export function humanDate(date: string, main = false): string {
	const day = dayjs(date).tz()
	const isToday = day.format(dateFormat) === getTodayDate()

	if (isToday && main) {
		return "the Day"
	}

	return day.format(humanFormat)
}

export function getPreviousDate(date: string) {
	return dayjs.tz(date).subtract(1, "day").format(dateFormat)
}

export function getNextDate(date: string) {
	return dayjs.tz(date).add(1, "day").format(dateFormat)
}

export function isDateInRange(date: string) {
	const start = dayjs.tz("1995-06-16")
	const end = dayjs().tz().startOf("day")
	const moment = dayjs.tz(date)

	const isAfterStart = !moment.isBefore(start)
	const isBeforeEnd = !moment.isAfter(end)

	return isAfterStart && isBeforeEnd
}
