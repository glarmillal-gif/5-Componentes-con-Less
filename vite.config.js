import { defineConfig } from "vite";
import * as glob from "glob";
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import htmlPurge from 'vite-plugin-purgecss';
import path, { resolve } from "node:path";
import handlebars from 'vite-plugin-handlebars';
import getPageContext from './data';
import { get } from "node:http";

export default defineConfig(
    {
        appType: "mpa",
        base: "/pw2_vitempa/",
        build: {
            rollupOptions: {
                input: Object.fromEntries(
                    [
                        ...glob.sync('./!(dist)/*.html').map(
                            file=> [
                                file.slice(0, file.length - path.extname(file).length),
                                resolve(__dirname, file)
                            ]
                        ),
                        ...glob.sync('./*.html').map(
                            file=> [
                                file.slice(0, file.length - path.extname(file).length),
                                resolve(__dirname, file)
                            ]
                        )
                    ]
                )
            }
        },
        plugins: [
            handlebars({
                partialDirectory: resolve(__dirname, 'parciales'),
                context: (pagePath)=>{
                    console.log(pagePath);
                    const contextVariable = getPageContext(pagePath);
                    console.log(contextVariable);
                    return contextVariable;
                }
            }),
            htmlPurge({}),
            ViteMinifyPlugin()
        ]
    }
);