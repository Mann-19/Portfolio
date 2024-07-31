/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				Atkinson: ["Atkinson Hyperlegible", 'sans-serif'],
				League: ["League Spartan", 'sans-serif'],
				Roboto: ["Roboto Condensed", 'sans-serif']
			},
			colors: {
				primaryLight: "#fff",
				primaryDark: "#13152C",
				Blue: "#97D5FF",
				Pink: "#FF95E9",
				Red: "#FFB5B5"
			},
			animation: {
				'spin-slow': 'spin 8s linear infinite',
				"marquee": 'marquee 10s linear infinite',
			},
			keyframes: {
				marquee: {
				  '0%': { transform: 'translateX(0%)' },
				  '100%': { transform: 'translateX(-50%)' },
				},
			},
		},
	},
	plugins: [],
}
