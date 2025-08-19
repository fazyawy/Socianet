import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.ts'
import { resolve } from 'path'

export default mergeConfig(viteConfig, defineConfig({
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: [resolve(__dirname, "src/tests/setup/setup.ts")],
	}
}))