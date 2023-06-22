type CopyrightProps = {
	copyright: string | undefined,
}

export default function ApodCopyright({ copyright }: CopyrightProps) {
	if (!copyright) { return <></> }

	return (
		<p>by <span className="font-bold"> { copyright } </span></p>
	)
}
