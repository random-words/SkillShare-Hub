// vite.config.js
import { defineConfig } from "file:///C:/Users/Antony/Desktop/SkShH%20-%20Web-dev/SkillShare-Hub/skillshare-hub/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Antony/Desktop/SkShH%20-%20Web-dev/SkillShare-Hub/skillshare-hub/node_modules/@vitejs/plugin-react/dist/index.js";
import istanbul from "file:///C:/Users/Antony/Desktop/SkShH%20-%20Web-dev/SkillShare-Hub/skillshare-hub/node_modules/vite-plugin-istanbul/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    istanbul({
      include: ["src/**/*"],
      exclude: ["node_modules", "dist", "build", "cypress"],
      cypress: true,
      forceBuildInstrument: true,
      requireEnv: false
    })
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBbnRvbnlcXFxcRGVza3RvcFxcXFxTa1NoSCAtIFdlYi1kZXZcXFxcU2tpbGxTaGFyZS1IdWJcXFxcc2tpbGxzaGFyZS1odWJcXFxcd2ViXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBbnRvbnlcXFxcRGVza3RvcFxcXFxTa1NoSCAtIFdlYi1kZXZcXFxcU2tpbGxTaGFyZS1IdWJcXFxcc2tpbGxzaGFyZS1odWJcXFxcd2ViXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9BbnRvbnkvRGVza3RvcC9Ta1NoSCUyMC0lMjBXZWItZGV2L1NraWxsU2hhcmUtSHViL3NraWxsc2hhcmUtaHViL3dlYi92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgaXN0YW5idWwgZnJvbSBcInZpdGUtcGx1Z2luLWlzdGFuYnVsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGlzdGFuYnVsKHtcbiAgICAgIGluY2x1ZGU6IFtcInNyYy8qKi8qXCJdLFxuICAgICAgZXhjbHVkZTogW1wibm9kZV9tb2R1bGVzXCIsIFwiZGlzdFwiLCBcImJ1aWxkXCIsIFwiY3lwcmVzc1wiXSxcbiAgICAgIGN5cHJlc3M6IHRydWUsXG4gICAgICBmb3JjZUJ1aWxkSW5zdHJ1bWVudDogdHJ1ZSxcbiAgICAgIHJlcXVpcmVFbnY6IGZhbHNlLFxuICAgIH0pLFxuICBdLFxuICBzZXJ2ZXI6IHtcbiAgICBwcm94eToge1xuICAgICAgXCIvYXBpXCI6IHtcbiAgICAgICAgdGFyZ2V0OiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMFwiLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIHNlY3VyZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaWEsU0FBUyxvQkFBb0I7QUFDOWIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sY0FBYztBQUVyQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsTUFDUCxTQUFTLENBQUMsVUFBVTtBQUFBLE1BQ3BCLFNBQVMsQ0FBQyxnQkFBZ0IsUUFBUSxTQUFTLFNBQVM7QUFBQSxNQUNwRCxTQUFTO0FBQUEsTUFDVCxzQkFBc0I7QUFBQSxNQUN0QixZQUFZO0FBQUEsSUFDZCxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
