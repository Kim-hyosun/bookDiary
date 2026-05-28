import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages 프로젝트 사이트(/bookDiary/) 기준 base.
// 빌드 산출물은 기존 deploy 스크립트(gh-pages -d build)에 맞춰 build/ 로 둔다.
export default defineConfig({
  base: "/bookDiary/",
  plugins: [react()],
  server: { port: 3000 },
  build: { outDir: "build" },
  css: {
    preprocessorOptions: {
      scss: { api: "modern-compiler" },
    },
  },
});
