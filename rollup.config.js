import path from "node:path";
import { fileURLToPath } from 'url';
import terser from '@rollup/plugin-terser';
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const extensions = [".ts", ".tsx"];

export default { 
    input: "src/index.tsx",
    output: { 
        format: "iife", 
        name: "TipsAlexPrisacariuDev",
        file: path.join(__dirname, "docs", 'script.js'),
        sourcemap: true,
    },
    plugins: [
        commonjs({ 
            ignoreGlobal: false,
            include: [
                "node_modules/solid-js/**"
            ]
        }),
        babel({
            extensions,
            presets: [
                "solid",
                "@babel/preset-typescript",
                ["@babel/preset-env", { bugfixes: true, targets: "last 2 years" }]
            ],
            babelHelpers: 'bundled',
            exclude: "node_modules/**",
        }),
        nodeResolve({ extensions, browser: true, main: true }),
        terser()
    ],
};
