import { useState } from "react"
import { HiMenu, HiXCircle } from "react-icons/hi"
import Link from "next/link"
import { getTodayDate, getPreviousDate, getNextDate } from "@/lib/time"
import { useRouter } from "next/router"


interface Props {
	date?: string,
}

export default function Navbar({ date }: Props) {
	const [isOpen, setIsOpen] = useState(false)
	const [calendarDate, setCalendarDate] = useState(date || getTodayDate())
	const router = useRouter()

	return (
		<div className={`fixed xl:sticky
			right-4 bottom-4 xl:left-0 xl:top-0
			p-4
			bg-nasa-blue text-white xl:bg-white xl:text-black
			${isOpen ? "rounded-2xl" : "rounded-full"} xl:rounded-none`}>

			<HiMenu
				onClick={() => setIsOpen(true)}
				className={`${isOpen ? "hidden" : "block"} xl:hidden`}
			/>

			<nav className={`${isOpen ? "block" : "hidden"} xl:block
				text-right`}>
				<ul className="font-bold space-y-2 xl:space-y-0 xl:flex xl:gap-x-6 xl:text-nasa-blue xl:items-center xl:justify-end">
					<Link href="/apods/all">
						<li><span className="underline mr-2">All Apods</span>🔭</li>
					</Link>
					<li className="xl:text-white xl:px-6 xl:py-1.5 xl:rounded-full xl:bg-nasa-blue cursor-pointer">
						<input
							className="bg-nasa-blue text-white cursor-pointer"
							type="date"
							value={calendarDate}
							min="1995-06-16"
							max={getTodayDate()}
							id="date"
							name="date"
							onChange={(e) => {
								setCalendarDate(e.currentTarget.value)
								router.push(`/apods/apod/${e.currentTarget.value}`)
							}}
							required
						/>
					</li>
					{
						date
							?
							<div className="space-y-2 xl:fixed xl:right-12 xl:bottom-4 xl:flex xl:gap-x-6 xl:space-y-0">
								<Link href={`/apods/apod/${getPreviousDate(date)}`}>
									<li><span className="underline mr-2">Previous</span>⬅️</li>
								</Link>
								<Link href={`/apods/apod/${getNextDate(date)}`}>
									<li><span className="underline mr-2">Next</span>➡️</li>
								</Link>
							</div>
							:
							<></>
					}
				</ul>

				<HiXCircle
					onClick={() => setIsOpen(false)}
					className="mt-2 ml-auto text-xl xl:hidden"
				/>
			</nav>
		</div>
	)
}
