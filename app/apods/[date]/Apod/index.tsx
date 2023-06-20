import { getApod } from "@/lib/apods"
import ApodMedia from "./Media"
import ApodTitle from "./Body/Title"
import ApodCopyright from "./Body/Copyright"
import ApodDate from "./Body/Date"
import ApodExplanation from "./Body/Explanation"

type ApodProps = {
	date: string,
}

export default async function Apod({ date }: ApodProps) {
	const apod = await getApod(date)

	if (!apod) { return <></> }

	return (
		<div className="card">
			<ApodMedia apod={apod}/>

			<div className="card-body">
				<div className="prose">
					<header>
						<ApodTitle title={apod.title}/>
						<ApodCopyright copyright={apod.copyright}/>
						<ApodDate date={apod.date}/>
					</header>

					<ApodExplanation explanation={apod.explanation}/>
				</div>
			</div>
		</div>
	)
}
