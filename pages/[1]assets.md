---
layout: Core
title: Assets
description: create,add,delete assets.
---
```js [CODE]
import Terminal from "client/components/Terminal.svelte";
```
# Assets
svelteCMS make it easy to manage your assets, navigate to `/admin/assets` and you can view,upload and delete assets.<br>
You can use asset providers like [Cloudinary](https://cloudinary.com/) and others.

```[warning]
Before uploading assets, make sure to add a asset provider.
```

## Add asset providers
To add a new asset provider, navagate to you `/admin/setting` and click the `add new` button.<br>
Current asset data
```ts
export type AssetData = {
    _id: ObjectId | string
    id:string
    provider:"cloudinary"|"app"
    src:string
    title:string
    type:string
    extension:string
}
```