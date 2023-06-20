import { NextResponse, URLPattern } from "next/server"
import type { NextRequest } from "next/server"
import { getTodayDate, isDateInRange, isDateValid } from "./lib/apods/time"

const PATTERNS = {
	HOME: new URLPattern({ pathname: "/" }),
	APOD_AT_DATE: new URLPattern({ pathname: "/apods/:date*" }),
}

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl
	const segments = pathname.split("/")

	const redirectToLatest = NextResponse.redirect(new URL(`/apods/${getTodayDate()}`, request.url))
	const responseRedirectHome = NextResponse.redirect(new URL("/", request.url))

	const isHomePath = PATTERNS.HOME.test({ pathname })
	if (isHomePath) { return redirectToLatest }


	const isApodAtDatePath = PATTERNS.APOD_AT_DATE.test({ pathname })
	if (isApodAtDatePath) {
		// If pathaname passes pattern test, then date is asserted to exist.
		const date = segments.at(-1)!

		const isDateCorrect = isDateValid(date) && isDateInRange(date)

		if (!isDateCorrect) { return responseRedirectHome }
	}

}

export const config = {
	matcher: ["/apods/:date*", "/"],
}
