// vite.config.mjs (or vite.config.js if your package.json already has "type":"module")
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tagger from "@dhiwise/component-tagger";
import path from "path";

export default defineConfig({
  // Build options
  build: {
    outDir: "dist",            // keep build output folder - ensure Vercel uses "build" (or change to "dist")
    sourcemap: true,            // optional - helpful for debugging production builds
    chunkSizeWarningLimit: 2000,
  },

  // Resolve aliases so bare imports like 'pages/NotFound' or '@/components/...' work
  resolve: {
    alias: {
      // allow import X from 'pages/NotFound'
      pages: path.resolve(process.cwd(), "src/pages"),
      // common alias so you can import like: import X from '@/components/X'
      "@": path.resolve(process.cwd(), "src"),
    },
  },

  // Plugins - keep tsconfigPaths to support tsconfig paths, react plugin for JSX, and tagger
  plugins: [react(), tsconfigPaths(), tagger()],

  // Dev server config
  server: {
    port: 4028,                // number (not string) is recommended
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: [".amazonaws.com", ".builtwithrocket.new"],
  },
});
