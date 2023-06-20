import Link from "next/link"

type SequentialLinkProps = {
	date: string,
	children: React.ReactNode,
}

export default function ApodLink({ date, children }: SequentialLinkProps) {
	return (
		<Link
			className="btn btn-sm btn-circle btn-ghost"
			href={`/apods/${date}`}
		>
			{ children }
		</Link>
	)
}
