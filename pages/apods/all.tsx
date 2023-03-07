import type { GetStaticProps } from "next"
import type { Apoy } from "@/lib/apods/apods"
import { getAllApods } from "@/lib/apods/apods"
import { ONE_DAY } from "@/lib/apods/time"


interface Props {
	apods: Apoy[],
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const apods = await getAllApods()

	return {
		props: {
			apods,
		},

		revalidate: ONE_DAY,
	}
}

export default function AllApods({ apods }: Props) {
	return (
		<div>
			{
				apods.map((apoy: Apoy) => (
												 apoy.apods.map(apod => (
													 <div>{apod.date}</div>
												 ))
			)) }
		</div>
	)
}
