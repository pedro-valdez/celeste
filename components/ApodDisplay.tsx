import type { Apod } from "@/lib/apods/apods";
import ApodMedia from "./ApodMedia";
import { humanDate } from "@/lib/time";


interface Props {
	apod: Apod,
}

export default function ApodDisplay({ apod }: Props) {
	return (
		<div className="">
			<h1 className="">
				👽 Astronomy{' '}
				<br className=""/>
				Picture of {humanDate(apod.date)}
			</h1>
			<ApodMedia apod={apod} />
			<h2>
				{ apod.title }
				{ apod.copyright
					? <>
							{' '}
							<br />
							<span className="">by </span>
							{apod.copyright}
						</>
					: <></>
				}
			</h2>
			<p className="">{ apod.explanation }</p>
		</div>
	)
}
