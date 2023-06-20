import { humanDate } from "@/lib/apods/time"

type DateProps = {
	date: string,
}

export default function ApodDate({ date }: DateProps) {
	return (
		<p>{ humanDate(date) }</p>
	)
}
