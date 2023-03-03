import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"


dayjs.extend(utc)
dayjs.extend(timezone)
/*
 * Since the NASA headquarters are in Washington D.C.
 * I decided to use EST as the timezone.
 */
dayjs.tz.setDefault("EST")

const yearFormat = "YYYY"
const dateFormat = "YYYY-MM-DD"

export function getYear(date: string) {
	return dayjs(date).format(yearFormat)
}

export function getTodayDate() {
	return dayjs().tz().format(dateFormat)
}
