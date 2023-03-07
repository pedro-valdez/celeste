import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { isDateInRange, isDateValid } from "./lib/apods/time"


export function middleware(request: NextRequest) {
	const date = request.nextUrl.pathname.split("/").at(-1)
	const responseRedirectHome = NextResponse.redirect(new URL("/", request.url))

	if (!date) { return  responseRedirectHome }

	const isValid = isDateValid(date) && isDateInRange(date)

	if (!isValid) { return responseRedirectHome }
}

export const config = {
	matcher: "/apods/apod/:date*",
}
