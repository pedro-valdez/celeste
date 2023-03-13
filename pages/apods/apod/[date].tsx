import type { GetStaticProps, GetStaticPaths } from "next"
import type { ParsedUrlQuery } from "querystring"
import type { Apod, Apoy } from "@/lib/apods/apods"
import { getAllApods } from "@/lib/apods/apods"
import { getApodAtDate } from "@/lib/apods/apods"
import Navbar from "@/components/Navbar"
import ApodDisplay from "@/components/ApodDisplay"


interface Props {
	apod: Apod,
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

	if (!apod) { return { notFound: true } }

	return {
		props: {
			apod,
		},
	}
}

export default function ApodAtDate({ apod }: Props) {
	return (
		<div className="px-4 pt-8 pb-16 sm:px-8 xl:pt-0 xl:pb-8">
			<Navbar date={apod.date}/>
			<ApodDisplay apod={apod}/>
		</div>
	)
}
