import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			white: "#ffffff",
			black: "#000000",
			transparent: "transparent",
			primary: {
				DEFAULT: "#1f3a61",
				hover: "#142842",
			},
			red: "#ef4444",
			gray: "#6b7280",
			offwhite: "#d2d2d2",
			lightblue: "#2757a2",
		},
		extend: {},
	},
	plugins: [],
};
export default config;
