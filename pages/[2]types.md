---
layout: Core
title: Types
description: Generated types by svelteCMS,.
---
```js [CODE]
import Terminal from "client/components/Terminal.svelte";
```
# Types
svelteCMS will generate types for your routes on dev mode, the generated types will saved to  `svelteCMS/types/generated.ts`.<br>
Types help you understand your routes data types or blocks types.<br>
Generated output
```ts
export type TagsData = {
    _id:any
    title:string
    slug:string
    altNames:string[]
}
export type CategoriesData = {
    _id:any
    title:string
    slug:string
    image:import("svelteCMS/types").AssetData
}
export type ProductsData = {
    _id:any
    title:string
    slug:string
    tags:TagsData[]
    categories:CategoriesData[]
    variants:{key:string,value:string}[]
}
```