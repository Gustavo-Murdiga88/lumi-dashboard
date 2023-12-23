import { defineConfig } from "vitest/config";
import PluginOptions from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [PluginOptions()],
	test: {
		setupFiles: "./test/e2e/setup.ts",
		sequence: {
			concurrent: false,
		},
		root: "./",
		globals: true,
		include: ["**/*.e2e-{test,spec}.ts"],
	},
});
