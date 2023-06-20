type ExplanationProps = {
	explanation: string,
}

export default function ApodExplanation({ explanation }: ExplanationProps) {
	return (
		<p>{ explanation }</p>
	)
}
