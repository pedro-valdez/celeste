import { getApod } from "@/lib/apods"
import ApodMedia from "../Media"
import { humanDate } from "@/lib/apods/time"

type ApodAtDateParams = {
	params: {
		date: string,
	},
}

export default async function ApodAtDate({ params }: ApodAtDateParams) {
	const apod = await getApod(params.date)

	if (!apod) { return <></> }

	return (
		<main>
			<div>

				<div className="card">
					<figure className="aspect-square relative">
						<ApodMedia apod={apod}/>
					</figure>

					<div className="card-body">
						<div className="prose">
							<header>
								<h1>{ apod.title }</h1>
								<p>{ apod.copyright }</p>
								<p>{ humanDate(apod.date) }</p>
							</header>

							<p>{ apod.explanation }</p>
						</div>
					</div>
				</div>

			</div>
		</main>
	)
}
