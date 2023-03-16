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
			{
				protocol: "http",
				hostname: "nusoft.fnal.gov",
				port: "",
				pathname: "/nova/public/**",
			},
		],
	},
}

module.exports = nextConfig
