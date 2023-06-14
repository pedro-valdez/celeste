import type { Apod } from "@/lib/apods/apods";
import ApodMedia from "./ApodMedia";
import { humanDate } from "@/lib/time";


interface Props {
	apod: Apod,
	main?: boolean,
}

export default function ApodDisplay({ apod, main }: Props) {
	return (
		<>
			<div className="xl:hidden space-y-4 max-w-xl mx-auto">
				<h1 className="mb-[1em]">
					👽 Astronomy{' '}
					<br className=""/>
					Picture of {humanDate(apod.date, main)}
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
				<p className="">{ apod.explanation }</p>
			</div>

			<div className="hidden xl:flex xl:gap-x-12 xl:h-screen xl:min-h-[600px] xl:max-h-[800px]">
				<ApodMedia apod={apod} />

				<div className="xl:w-1/2 xl:space-y-6 xl:self-center">
					<h1 className="">
						👽 Astronomy Picture of {humanDate(apod.date, main)}
					</h1>
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
					<p className="xl:max-w-md 2xl:max-w-2xl xl:overflow-y-scroll">{ apod.explanation }</p>
				</div>
			</div>
		</>
	)
}


ApodDisplay.defaultProps = {
	main: false,
}
