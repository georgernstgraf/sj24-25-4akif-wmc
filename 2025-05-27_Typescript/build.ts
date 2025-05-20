// von https://docs.deno.com/runtime/reference/migration_guide/#cli-changes

import * as esbuild from "npm:esbuild";
import { denoPlugins } from "jsr:@luca/esbuild-deno-loader";

const result = await esbuild.build({
    plugins: [...denoPlugins()],
    entryPoints: ["./src/frontend.ts"],
    outfile: "./dist/frontend.js",
    bundle: true,
    format: "esm",
});

esbuild.stop();
