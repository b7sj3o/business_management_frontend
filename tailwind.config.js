/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'gray-700': '#333333',
				'gray-600': '#555555',
				'gray-500': '#777777',
				lightGray: '#f9f9f9',
			},
		},
	},
	plugins: [],
}
