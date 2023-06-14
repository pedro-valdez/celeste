import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import { readLastApod } from "./fs"
import { dateFormat, getTodayDate } from "@/lib/time"


dayjs.extend(utc)
dayjs.extend(timezone)
/*
 * Since the NASA headquarters are in Washington D.C.
 * I decided to use EST as the timezone.
 */
dayjs.tz.setDefault("EST")

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


export function isDateInRange(date: string) {
	const start = dayjs.tz("1995-06-16")
	const end = dayjs().tz().startOf("day")
	const moment = dayjs.tz(date)

	const isAfterStart = !moment.isBefore(start)
	const isBeforeEnd = !moment.isAfter(end)

	return isAfterStart && isBeforeEnd
}
