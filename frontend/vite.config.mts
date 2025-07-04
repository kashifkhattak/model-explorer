import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import svgrPlugin from 'vite-plugin-svgr'

export default defineConfig({
	envDir: './env',
	plugins: [react(), svgrPlugin(), tailwindcss()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	build: {
		sourcemap: true,
		outDir: './build'
	},
	server: {
		port: 5173,
		host: true // Expose to local network
	}
})
