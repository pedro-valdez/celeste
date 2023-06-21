import Link from "next/link"

type SequentialLinkProps = {
	date: string,
	children: React.ReactNode,
	disabled?: boolean,
}

export default function ApodLink({ date, children, disabled }: SequentialLinkProps) {
	return (
		<Link
			className={`btn btn-sm btn-circle btn-ghost ${disabled ? "btn-disabled" : ""}`}
			href={`/apods/${date}`}
		>
			{ children }
		</Link>
	)
}
