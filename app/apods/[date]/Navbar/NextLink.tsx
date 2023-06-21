import { HiChevronRight } from "react-icons/hi"
import ApodLink from "./ApodLink";
import { getNextDate, isAtEnd } from "@/lib/apods/time";

type NextLinkProps = {
	date: string,
}

export default function NextLink({ date }: NextLinkProps) {
	return (
		<ApodLink
			date={getNextDate(date)}
			disabled={isAtEnd(date)}
		>
			<HiChevronRight className="text-3xl"/>
		</ApodLink>
	)
}
