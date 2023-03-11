import type { Apod } from "@/lib/apods/apods"
import Image from "next/image"


interface Props {
	apod: Apod,
}

export default function ApodMedia({ apod }: Props) {
	if (apod.media_type === "image") {
		return (
			<div className="relative row-start-1 row-end-4">
				<Image
					src={apod.hdurl! || apod.url!}
					alt={apod.explanation}
					fill
					className="!static w-full h-auto rounded-[1.5em] xl:!absolute xl:h-full xl:object-contain xl:object-right xl:rounded-none xl:py-[1em] 2xl:py-0"
				/>
			</div>
		)
	}

	if (apod.media_type === "video") {
		return (
			<div>
				<video controls>
					<source src={apod.url || apod.hdurl}/>
				</video>
			</div>
		)
	}

	return (
		<div>
			<div className="w-full h-full bg-red-500">
			</div>
		</div>
	)
}
