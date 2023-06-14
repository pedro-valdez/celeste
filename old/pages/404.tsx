import Navbar from "@/components/Navbar"


export default function CustomError() {
	return (
		<div className="px-4 pt-8 pb-16 sm:px-8 xl:pt-0 xl:pb-8">
			<Navbar />
			<div className="h-[calc(100vh-8rem)] flex items-center justify-center">
				<div className="my-auto">
					<h1 className="text-nasa-red">Error</h1>
					<p>Some dates don&apos;t have an entry.</p>
				</div>
			</div>
		</div>
	)
}
