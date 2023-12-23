import { defineConfig } from "vitest/config";
import PluginOptions from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [PluginOptions()],
	test: {
		globals: true,
		root: "./",
		include: ["**/*.{test,spec}.ts"],
	},
});
