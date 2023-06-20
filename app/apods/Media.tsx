import type { Apod } from "@/lib/apods"
import Image from "next/image"


type MediaProps = {
	apod: Apod,
}

export default function ApodMedia({ apod }: MediaProps) {
	if (apod.media_type === "image") {
		return (
			<Image
				src={apod.hdurl || apod.url || ""}
				alt={apod.explanation}
				fill
				className="object-contain"
			/>
		)
	}

	if (apod.media_type === "video") {
		return (
			<iframe src={apod.hdurl || apod.url} className="w-full h-full">
			</iframe>
		)
	}

	return (
		<div className="w-full h-full">
		</div>
	)
}
