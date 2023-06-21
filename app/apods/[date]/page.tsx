import { generateAllDates } from "@/lib/apods/time"
import Apod from "./Apod"

type ApodAtDateParams = {
	params: {
		date: string,
	},
}

export async function generateStaticParams() {
	const dates = generateAllDates()
	
	return dates.map(date => ({
		date,
	}))
}

export default async function ApodAtDate({ params }: ApodAtDateParams) {
	return (
		<main>
			<div>
				<Apod date={params.date} />
			</div>
		</main>
	)
}
