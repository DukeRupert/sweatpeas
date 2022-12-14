/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Tangerine', ...defaultTheme.fontFamily.sans]
			},
			transitionTimingFunction: {
				'expo-in': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
				'expo-out': 'cubic-bezier(0.19, 1, 0.22, 1)',
				'quint-out': 'cubic-bezier(0.22, 1, 0.36, 1)',
				'quint-in': 'cubic-bezier(0.64, 0, 0.78, 0)'
			}
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		require('@skeletonlabs/skeleton/tailwind/theme.cjs')
	]
};
