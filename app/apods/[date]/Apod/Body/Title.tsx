type TitleProps = {
	title: string,
}

export default function ApodTitle({ title }: TitleProps) {
	return (
		<h1>{ title }</h1>
	)
}
