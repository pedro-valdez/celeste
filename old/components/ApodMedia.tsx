import type { Apod } from "@/lib/apods/apods"
import Image from "next/image"


interface Props {
	apod: Apod,
}

export default function ApodMedia({ apod }: Props) {
	if (apod.media_type === "image") {
		return (
			<div className="relative aspect-square xl:aspect-auto xl:w-1/2">
				<Image
					src={apod.hdurl! || apod.url!}
					alt={apod.explanation}
					fill
					className="object-cover xl:object-contain xl:object-right"
				/>
			</div>
		)
	}

	if (apod.media_type === "video") {
		return (
			<div className="aspect-square xl:w-1/2">
				<iframe src={apod.hdurl || apod.url} frameBorder="0" className="w-full h-full">
				</iframe>
			</div>
		)
	}

	return (
		<div className="aspect-square xl:w-1/2">
			<div className="h-full bg-nasa-blue">
			</div>
		</div>
	)
}
