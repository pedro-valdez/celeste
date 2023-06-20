import './global.css'
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "Celeste",
	description: "Modern NASA APODs",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode,
}) {
	return (
		<html lang="en" data-theme="lofi">
			<body className={inter.className}>
				{ children }
			</body>
		</html>
	)
}
