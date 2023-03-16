import { Apod } from "@/lib/apods/apods"
import { humanDate } from "@/lib/time"
import { useState } from "react"
import ApodDisplay from "./ApodDisplay"


interface Props {
	apod: Apod,
}

export default function Accordion({ apod } : Props) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<article>
			<div
				className="flex justify-between text-2xl sm:text-3xl 2xl:text-4xl border-b-2 border-nasa-blue pb-4 xl:pb-8"
				onClick={() => setIsOpen(!isOpen)}
			>
				<span className="font-bold text-nasa-blue">{humanDate(apod.date)}</span>
				<span>
					{
						isOpen
							? "❌"
							: "⬇️"
					}
				</span>
			</div>
			{
				isOpen
					? <ApodDisplay apod={apod}/>
					: <></>
			}
		</article>
	)
}
