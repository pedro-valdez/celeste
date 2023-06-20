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
		<div className="card 2xl:card-side 2xl:px-16 2xl:h-[calc(100vh-64px)]">
			<ApodMedia apod={apod}/>

			<div className="card-body 2xl:px-0 2xl:w-1/2">
				<div className="prose mx-auto lg:prose-lg xl:prose-xl 2xl:prose-2xl 2xl:my-auto 2xl:px-[1em] 2xl:overflow-y-auto">
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
