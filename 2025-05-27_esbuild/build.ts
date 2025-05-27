// von https://docs.deno.com/runtime/reference/migration_guide/#cli-changes
import * as esbuild from "npm:esbuild";
import { denoPlugins } from "jsr:@luca/esbuild-deno-loader";

await esbuild.build({
    plugins: [...denoPlugins()],
    entryPoints: ["./main.ts"],
    outfile: "./script.js",
    bundle: true,
    format: "esm",
});

esbuild.stop();
