/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend: {
			colors: {
				nasa: {
					red: "#FF3B2B",
					blue: "#003E8E",
				},
			},
		},
  },
  plugins: [
		require("daisyui"),
	],
}
