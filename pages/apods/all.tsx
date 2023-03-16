import type { GetStaticProps } from "next"
import type { Apoy } from "@/lib/apods/apods"
import { getAllApods } from "@/lib/apods/apods"
import { ONE_DAY } from "@/lib/time"
import ApodAccordion from "@/components/ApodAccordion"
import Navbar from "@/components/Navbar"


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
	const flatApods = apods.map(apoy => apoy.apods).flat()

	return (
		<div className="px-4 pt-8 pb-16 sm:px-8 xl:pt-0 xl:pb-8">
			<Navbar />
			<ul className="space-y-4 xl:space-y-8">
				{
					flatApods.map(apod => (
						<li key={apod.date}>
							<ApodAccordion apod={apod} />
						</li>
						)
					)
				}
			</ul>
		</div>
	)
}
