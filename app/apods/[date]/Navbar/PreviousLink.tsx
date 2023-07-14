"use client"
import { HiChevronLeft } from "react-icons/hi"
import ApodLink from "./ApodLink";
import { getPreviousDate, isAtBeginning } from "@/lib/apods/time";

type PreviousLinkProps = {
	date: string,
}

export default function PreviousLink({ date }: PreviousLinkProps) {
	return (
		<ApodLink
			date={getPreviousDate(date)}
			disabled={isAtBeginning(date)}
		>
			<HiChevronLeft className="text-3xl"/>
		</ApodLink>
	)
}
