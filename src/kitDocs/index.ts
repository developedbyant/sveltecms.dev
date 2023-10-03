import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

/** set meta tags */
export const metaTagsStore:Writable<{
    appName:string
    favicon?:string
    url?:string
    title?:string
    description?:string
    image?:string
    ogType?:"website"|"article"
}> = writable({ appName:"svelteCMS" })

export default {
    navLinks:[
        { text:"Home",href:"/",external:false },
        { text:"Documentation",href:"/docs",external:false },
        { text:"Demo",href:"/admin",external:true },
    ],
    socialMedias:{
        twitter:"https://twitter.com/svelteCMS",
        github:"https://github.com/svelteCMS",
    },
    routes:[
        {
            title:"Getting Started",
            links:[
                {
                    title:"Introduction",href:"/docs",
                    opPageLinks:[],
                },
                // {
                //     title:"Install",href:"/docs/install",
                //     opPageLinks:[],
                // },
                // {
                //     title:"Update",href:"/docs/update",
                //     opPageLinks:[],
                // },
            ]
        },
        {
            title:"Types",
            links:[
                {
                    title:"Generated",href:"/docs/types",
                    opPageLinks:[
                        { text:"Import",href:"#import types" },
                    ],
                }
            ]
        }
    ]
}