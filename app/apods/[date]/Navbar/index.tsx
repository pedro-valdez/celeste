import Calendar from "./Calendar"
import NextLink from "./NextLink"
import PreviousLink from "./PreviousLink"

type NavbarProps = {
	date: string,
}

export default function Navbar({ date }: NavbarProps) {
	return (
		<div className="fixed w-full bottom-0 left-0 z-10 backdrop-blur lg:sticky lg:top-0">
			<nav className="navbar px-4 sm:max-w-sm sm:mx-auto">
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
		</div>
	)
}
