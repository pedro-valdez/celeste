import Calendar from "./Calendar"
import NextLink from "./NextLink"
import PreviousLink from "./PreviousLink"

type NavbarProps = {
	date: string,
}

export default function Navbar({ date }: NavbarProps) {
	return (
		<nav className="navbar fixed bottom-0 left-0 z-10 backdrop-blur px-8">
			<div className="navbar-start">
				<PreviousLink date={date}/>
			</div>

			<div className="navbar-center">
				<Calendar date={date} />
			</div>

			<div className="navbar-end">
				<NextLink date={date}/>
			</div>
		</nav>
	)
}
