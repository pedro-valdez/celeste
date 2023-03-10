import type { Apod } from "@/lib/apods/apods";
import ApodMedia from "./ApodMedia";
import { humanDate } from "@/lib/time";


interface Props {
	apod: Apod,
}

export default function ApodDisplay({ apod }: Props) {
	return (
		<div className="space-y-[1em]">
			<h1 className="mb-[1em]">
				👽 Astronomy{' '}
				<br className="2xl:hidden"/>
				Picture of {humanDate(apod.date)}
			</h1>
			<ApodMedia apod={apod} />
			<h2>
				{ apod.title }
				{ apod.copyright
					? <>
							{' '}
							<br className="2xl:hidden" />
							<span className="text-black">by </span>
							{apod.copyright}
						</>
					: <></>
				}
			</h2>
			<p>{ apod.explanation }</p>
		</div>
	)
}
