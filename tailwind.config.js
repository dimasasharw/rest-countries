/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			spacing: {
				"space-xxs": "0.125rem",
				"space-xs": "0.25rem",
				"space-s": "0.5rem",
				"space-sm": "0.75rem",
				"space-m": "1rem",
				"space-ml": "1.25rem",
				"space-l": "1.5rem",
				"space-xl": "2rem",
				"space-xxl": "2.5rem",
				"space-xxxl": "3rem",
			},
			colors: {
				Primary: {
					Primary: "#FEAA1A",
					100: "#FCEDD8",
					200: "#F9D6AF",
					300: "#F5B97C",
					400: "#EF9148",
					500: "#EC792D",
					600: "#E59101",
					700: "#B74417",
					800: "#92371A",
					900: "#762F18",
				},
				Secondary: {
					Secondary: "#1B1C1E",
					100: "#D7D8DB",
					200: "#BDBEC0",
					300: "#A3A4A6",
					400: "#888A8D",
					500: "#6F7174",
					600: "#57585B",
					700: "#3D3F41",
					800: "#242628",
					900: "#040F0F",
				},
				Success: {
					100: "#E1FBF7",
					200: "#C2F8EF",
					300: "#79EFDC",
					400: "#4FEAD1",
					500: "#24E5C5",
					600: "#17C1A6",
					700: "#129781",
					800: "#0D6C5D",
				},
				Warning: {
					100: "#FBECDA",
					200: "#F8DAB5",
					300: "#F0B267",
					400: "#EC9D3E",
					500: "#E58817",
					600: "#BC7013",
					700: "#93570F",
					800: "#6A3F0A",
				},
				Error: {
					100: "#F8D8DB",
					200: "#F2B1B7",
					300: "#EB8993",
					400: "#DE3D4D",
					500: "#CD2334",
					600: "#A81D2B",
					700: "#841722",
					800: "#5F1018",
				},
				BaseWhite: "#FCFCFC",
				DarkGrey: "#121212",
				Neutrals: {
					100: "#E8EBED",
					200: "#D2D6DB",
					300: "#BBC2C9",
					400: "#A4ADB6",
					500: "#828F9B",
					600: "#64707D",
					700: "#40474F",
					800: "#2D3339",
					900: "#2B2829",
				},
			},
			borderRadius: {
				"rad-xs": "0.125rem",
				"rad-s": "0.25rem",
				"rad-sm": "0.5rem",
				"rad-m": "0.75rem",
				"rad-ml": "1rem",
				"rad-l": "1.5rem",
				"rad-xl": "2rem",
				"rad-round": "62.4375rem",
			},
			fontSize: {
				"size-1": "1rem",
			},
			// scrollbar: {
			// 	thumb: {
			// 		DEFAULT: '#FEAA1A', // Default thumb color
			// 		hover: '#E58817',   // Thumb color on hover
			// 	},
			// 	track: {
			// 		DEFAULT: 'transparent', // Default track color
			// 	},
			// },
		},
		screens: {
			'tablet': '640px',
			// => @media (min-width: 640px) { ... }

			'laptop': '1024px',
			// => @media (min-width: 1024px) { ... }

			'desktop': '1280px',
			// => @media (min-width: 1280px) { ... }
		},
	},
	plugins: [
		require('tailwind-scrollbar')({
			nocompatible: true, // Use modern syntax if you're not supporting older browsers.
		}),
	],
};
