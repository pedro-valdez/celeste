import type { GetStaticProps } from "next"
import type { Apoy } from "@/lib/apods/apods"
import { getAllApods } from "@/lib/apods/apods"
import { ONE_DAY } from "@/lib/time"
import ApodAccordion from "@/components/ApodAccordion"


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
		<div>
			<ul>
				{
					flatApods.map(apod => (
							<ApodAccordion
								apod={apod}
								key={apod.date}
							/>
						)
					)
				}
			</ul>
		</div>
	)
}
