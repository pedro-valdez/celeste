import Apod from "./Apod"

type ApodAtDateParams = {
	params: {
		date: string,
	},
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
