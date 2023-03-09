/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "apod.nasa.gov",
				port: "",
				pathname: "/apod/image/**",
			},
		],
	},
}

module.exports = nextConfig
