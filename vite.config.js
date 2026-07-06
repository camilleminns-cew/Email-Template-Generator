import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: for a GitHub *project* Pages site the base must be the repo name,
// so built asset URLs resolve under https://<user>.github.io/<repo>/.
// If you rename the repo, change this to match, or the page will load blank.
export default defineConfig({
  plugins: [react()],
  base: "/Email-Template-Generator/",
});
