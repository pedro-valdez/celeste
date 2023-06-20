"use client"

import { getTodayDate, startDate } from "@/lib/apods/time"
import { useRouter } from "next/navigation"
import { useState } from "react"

type CalendarProps = {
	date: string,
}

export default function Calendar({ date }: CalendarProps) {
	const [calendarDate, setCalendarDate] = useState(date)
	const router = useRouter()

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault()
				router.push(`/apods/${calendarDate}`)
			}}
		>
			<input
				type="date"
				value={calendarDate}
				min={startDate}
				max={getTodayDate()}
				onChange={event => setCalendarDate(event.currentTarget.value)}
				className="bg-transparent"
			/>
			<button type="submit"></button>
		</form>
	)
}
