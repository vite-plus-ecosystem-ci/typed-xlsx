import { defineConfig } from "vite-plus";

export default defineConfig({
  lint: {
    ignorePatterns: ["build/**", "node_modules/**"],
    options: {
      denyWarnings: true,
      typeAware: false,
      typeCheck: false,
    },
  },
  fmt: {
    ignorePatterns: ["build/**", "node_modules/**"],
  },
  pack: {
    deps: {
      // tsdown <0.23 compatibility: resolve external dependency subpaths.
      // Remove to preserve subpath imports as written (the new default).
      // https://tsdown.dev/options/dependencies#deps-resolvedepsubpath
      resolveDepSubpath: true,
    },
    clean: true,
    dts: true,
    entry: ["./src/index.ts"],
    fixedExtension: false,
    format: "esm",
    minify: "dce-only",
    outDir: "./build",
    sourcemap: false,
    target: "es2022",
    treeshake: false,
  },
  test: {
    // Vitest v4 compatibility: preserve mock call history.
    // Remove after tests no longer rely on calls from setup or earlier tests.
    // https://release-v1-0-0-rc-0-viteplus-dev.voidzero-docs.workers.dev/guide/vitest-v5#remove-unneeded-compatibility-settings
    // https://vitest.dev/guide/migration/#clearmocks-is-enabled-by-default
    clearMocks: false,
    include: ["test/**/*.test.ts"],
  },
});
