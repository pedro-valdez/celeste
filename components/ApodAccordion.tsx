import { Apod } from "@/lib/apods/apods"
import { useState } from "react"
import ApodDisplay from "./ApodDisplay"


interface Props {
	apod: Apod,
}

export default function Accordion({ apod } : Props) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<li>
			<article onClick={() => setIsOpen(!isOpen)}>
				{
					isOpen
						? <ApodDisplay apod={apod}/>
						: <h1>{apod.date}</h1>
				}
			</article>
		</li>
	)
}
