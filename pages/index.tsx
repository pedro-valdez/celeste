import type { GetStaticProps } from "next"
import type { Apod } from "@/lib/apods/apods"
import { getLatestApod } from "@/lib/apods/apods"
import { ONE_DAY } from "@/lib/apods/time"


interface Props {
	apod: Apod,
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const apod = await getLatestApod()

	return {
		props: {
			apod,
		},
		
		revalidate: ONE_DAY,
	}
}

export default function Home({ apod }: Props) {
	console.log(apod)

  return (
		<h1>Hello, world!</h1>
  )
}
