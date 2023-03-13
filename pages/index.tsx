import type { GetStaticProps } from "next"
import type { Apod } from "@/lib/apods/apods"
import { getLatestApod } from "@/lib/apods/apods"
import { ONE_DAY } from "@/lib/time"
import ApodDisplay from "@/components/ApodDisplay"
import Navbar from "@/components/Navbar"


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
  return (
		<div className="px-4 pt-8 pb-16 sm:px-8 xl:pt-0 xl:pb-8">
			<Navbar />
			<ApodDisplay apod={apod} />
		</div>
  )
}
