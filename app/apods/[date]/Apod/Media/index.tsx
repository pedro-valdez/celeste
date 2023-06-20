import type { Apod } from "@/lib/apods"
import ApodImage from "./ApodImage"
import ApodVideo from "./ApodVideo"
import ApodNothing from "./ApodNothing"

type MediaProps = {
	apod: Apod,
}

export default function ApodMedia({ apod }: MediaProps) {
	return (
		<figure className="aspect-square relative md:aspect-video 2xl:w-1/2 2xl:aspect-square">
			{
				apod.media_type === "image" ? (
					<ApodImage apod={apod}/>
				) : apod.media_type === "video" ? (
					<ApodVideo apod={apod}/>
				) : (
					<ApodNothing />
				)
			}
		</figure>
	)
}
