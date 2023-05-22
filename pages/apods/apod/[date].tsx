import type { GetStaticProps, GetStaticPaths } from "next"
import type { ParsedUrlQuery } from "querystring"
import type { Apod, Apoy } from "@/lib/apods/apods"
import { getAllApods } from "@/lib/apods/apods"
import { getApodAtDate } from "@/lib/apods/apods"
import Navbar from "@/components/Navbar"
import ApodDisplay from "@/components/ApodDisplay"
import { humanDate } from "@/lib/time"


interface Props {
	apod: Apod | null,
	date: string,
}

interface Params extends ParsedUrlQuery {
	date: string,
}

export const getStaticPaths: GetStaticPaths = async () => {
	const apods = await getAllApods()
	const paths = apods
		.map((apoy: Apoy) => apoy.apods)
		.flat()
		.map((apod: Apod) => ({ params: { date: apod.date } }))

	return {
		paths,
		fallback: "blocking",
	}
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
	const date = context.params?.date

	if (!date) { return { notFound: true } }

	const apod = await getApodAtDate(date)

	if (!apod) {
		return {
			props: {
				apod: null,
				date,
			},
		}
	}

	return {
		props: {
			apod,
			date,
		},
	}
}

export default function ApodAtDate({ apod, date }: Props) {
	if (!apod) {
		return (
			<div className="px-4 pt-8 pb-16 sm:px-8 xl:pt-0 xl:pb-8">
				<Navbar date={date}/>
				<div className="h-[calc(100vh-8rem)] flex items-center justify-center">
					<div className="my-auto">
						<h1 className="text-nasa-red mb-[1em]">The APOD at {humanDate(date)} doesn&apos;t exist.</h1>
						<p>Some dates don&apos;t have a corresponding APOD.</p>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className="px-4 pt-8 pb-16 sm:px-8 xl:pt-0 xl:pb-8">
			<Navbar date={date}/>
			<ApodDisplay apod={apod}/>
		</div>
	)
}
