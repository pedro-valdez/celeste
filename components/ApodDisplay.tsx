import type { Apod } from "@/lib/apods/apods";
import ApodMedia from "./ApodMedia";


interface Props {
	apod: Apod,
}

export default function ApodDisplay({ apod }: Props) {
	return (
		<div className="">
			<h1>{ `Astronomy Picture of ${apod.date}` }</h1>
			<ApodMedia apod={apod} />
			<h2>
				{ apod.title }
				{ apod.copyright
					? <><br />{apod.copyright}</>
					: <></>
				}
			</h2>
			<p>{ apod.explanation }</p>
		</div>
	)
}
