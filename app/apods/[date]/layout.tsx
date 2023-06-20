import { getNextDate, getPreviousDate } from "@/lib/apods/time"
import Link from "next/link"
import { HiArrowLeftCircle, HiArrowRightCircle } from "react-icons/hi2"
import Calendar from "./Calendar"

type ApodLayoutProps = {
	children: React.ReactNode,
	params: {
		date: string,
	},
}

export default function ApodLayout({ children, params }: ApodLayoutProps) {
	return (
		<div className="pb-16">
			<nav className="navbar fixed bottom-0 left-0 z-10 backdrop-blur px-8">
				<div className="navbar-start">
					<Link
						href={`/apods/${getPreviousDate(params.date)}`}
					>
						<HiArrowLeftCircle className="text-3xl"/>
					</Link>
				</div>

				<div className="navbar-center">
					<Calendar date={params.date} />
				</div>

				<div className="navbar-end">
					<Link
						href={`/apods/${getNextDate(params.date)}`}
					>
						<HiArrowRightCircle  className="text-3xl"/>
					</Link>
				</div>
			</nav>

			{ children }
		</div>
	)
}
