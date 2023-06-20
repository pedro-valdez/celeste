import Navbar from "./Navbar"

type ApodLayoutProps = {
	children: React.ReactNode,
	params: {
		date: string,
	},
}

export default function ApodLayout({ children, params }: ApodLayoutProps) {
	return (
		<div className="pb-16">
			<Navbar date={params.date}/>

			{ children }
		</div>
	)
}
