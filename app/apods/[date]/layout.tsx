import { getNextDate, getPreviousDate } from "@/lib/apods/time"
import Link from "next/link"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
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
						className="btn btn-sm btn-circle btn-ghost"
						href={`/apods/${getPreviousDate(params.date)}`}
					>
						<HiChevronLeft className="text-3xl"/>
					</Link>
				</div>

				<div className="navbar-center">
					<Calendar date={params.date} />
				</div>

				<div className="navbar-end">
					<Link
						className="btn btn-sm btn-circle btn-ghost"
						href={`/apods/${getNextDate(params.date)}`}
					>
						<HiChevronRight  className="text-3xl"/>
					</Link>
				</div>
			</nav>

			{ children }
		</div>
	)
}
