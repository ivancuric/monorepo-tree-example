import path from "path";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  return {
    build: {
      emptyOutDir: false,
      // TODO: where do we place the sourcemaps when in dev mode?
      // sourcemap: mode === "development" ? "inline" : false,
      sourcemap: "inline",
      // https://vitejs.dev/config/#build-lib
      lib: {
        // `entry` is required since the library cannot use HTML as entry.
        entry: path.resolve(__dirname, "src/index.ts"),
        // `name` is the exposed global variable and is required when formats includes 'umd' or 'iife'
        name: "core",
        // Default formats are `['es', 'umd']`
        formats: ["es", "umd"],
        // `fileName` is the name option of package.json, it can also be defined
        //  as function taking the `format` as an argument
        fileName: (format) => `core.${format}.js`,
      },
    },
  };
});
