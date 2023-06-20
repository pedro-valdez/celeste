import type { Apod } from "@/lib/apods"
import Image from "next/image"

type ImageProps = {
	apod: Apod,
}

export default function ApodImage({ apod }: ImageProps) {
	return (
		<Image
			src={apod.hdurl || apod.url || ""}
			alt={apod.explanation}
			fill
			className="object-contain"
		/>
	)
}
