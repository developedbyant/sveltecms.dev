---
layout: Core
title: Database
description: Database utils file to create,update and delete from your db.
---
# Database
The `svelteCMS/lib/database.server.ts` util file help create,update and delete object from your database fully type safe.<br>

## How to use it
Start by import `Database` it from `svelteCMS/lib/database.server`.
```ts
import Database from "svelteCMS/lib/database.server"
// or
import { Insert,Update,Delete,Find } from "svelteCMS/lib/database.server"
```

## Example
Let's find a post with the slug "test" and return slug and title.
```ts
import Database from "svelteCMS/lib/database.server"
const post = await Database.Find({ slug:"test" },{ slug:true,title:true })//[H]
```