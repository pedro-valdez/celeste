import type { Apod } from "@/lib/apods/apods"
import Image from "next/image"


interface Props {
	apod: Apod,
}

export default function ApodMedia({ apod }: Props) {
	if (apod.media_type === "image") {
		return (
			<div className="">
				<Image
					src={apod.hdurl! || apod.url!}
					alt={apod.explanation}
					fill
					className=""
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
			<div className="">
			</div>
		</div>
	)
}
