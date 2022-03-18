const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	mode: "jit",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				background: "#CDC0B1",
			},
			width: {
				438: "438px",
			},
		},
		plugins: [],
	},
}
