import { defineConfig } from "cypress";
import viteConfig from "./vite.config.js";
// import codeCoverageTask from "@cypress/code-coverage/task";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {
      // codeCoverageTask(on, config);
      return config;
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig,
    },
    specPattern: "cypress/component/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // codeCoverageTask(on, config);
      return config;
    },
  },

  env: {
    codeCoverage: {
      exclude: ["cypress/**/*.*"],
      expectFrontendCoverageOnly: true,
    },
  },

  video: false,
  screenshotsFolder: "cypress/screenshots",
});
