import type { Apod } from "@/lib/apods/apods";
import ApodMedia from "./ApodMedia";
import { humanDate } from "@/lib/time";


interface Props {
	apod: Apod,
}

export default function ApodDisplay({ apod }: Props) {
	return (
		<div className="space-y-[1em] xl:space-y-0 xl:grid xl:grid-cols-2 xl:grid-rows-[auto_auto_1fr] xl:gap-x-[3em] xl:gap-y-[1em]">
			<h1 className="mb-[1em] xl:mb-0 2xl:pt-[0.5em]">
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
							<br />
							<span className="text-black">by </span>
							{apod.copyright}
						</>
					: <></>
				}
			</h2>
			<p className="xl:max-w-md 2xl:max-w-2xl 2xl:pb-[1em]">{ apod.explanation }</p>
		</div>
	)
}
