import type { Apod } from "@/lib/apods"

type VideoProps = {
	apod: Apod,
}

export default function ApodVideo({ apod }: VideoProps) {
	return (
		<iframe src={apod.hdurl || apod.url} className="w-full h-full">
		</iframe>
	)
}
