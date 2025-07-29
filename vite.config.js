import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// export default defineConfig({
// 	plugins: [react()],
// 	base: '/',
// })
export default defineConfig({
	plugins: [react()],
	base: '/graft/',
	esbuild: {
		loader: 'jsx',
	},
	resolve: {
		alias: {
			'./runtimeConfig': './runtimeConfig.browser',
		},
	},
	optimizeDeps: {
		esbuildOptions: {
			loader: {
				'.js': 'jsx',
			},
		},
	},
})
