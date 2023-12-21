import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["--font-roboto"],
			},
		},
	},
	plugins: [],
};
export default config;
