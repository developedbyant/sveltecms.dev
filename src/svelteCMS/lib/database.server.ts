import type * as GeneratedTypes from "svelteCMS/types/generated";
import db from "svelteCMS/lib/db.server";

type Config<TYPE> = { limit?:number,skip?:number,sort?:{ key: (keyof TYPE), direction:"desc"|"asc" } }

type Filter<Data> = {[key in keyof Data]:any}|{}

type SetData<TYPE> = { [K in keyof TYPE]?: TYPE[K] }

export class Find {
    async post<K extends keyof GeneratedTypes.PostsData>(filter:Filter<GeneratedTypes.PostsData>,select?:{[P in K]:true|{[key:string]:any}}){
            const object = await db.collection("posts").findOne(filter,{ projection:select }) as any ;
            if(object) object['_id']=object['_id'].toString()
            const response = object as typeof select extends undefined ? GeneratedTypes.PostsData : Pick<GeneratedTypes.PostsData, K> & { _id:string }
            return response
        }
        async posts<K extends keyof GeneratedTypes.PostsData>(filter:Filter<GeneratedTypes.PostsData>,select?:{[P in K]:true|{[key:string]:any}},config?:Config<GeneratedTypes.PostsData>){
            type Response = typeof select extends undefined ? GeneratedTypes.PostsData : Pick<GeneratedTypes.PostsData, K> & { _id:string }
            const cursor = db.collection("posts").find(filter,{ projection:select }).map(((data:any)=>{ data['_id']=data['_id'].toString() ; return data}))
            if(config?.skip) cursor.skip(config.skip)
            if(config?.sort) cursor.sort(config.sort.key,config.sort.direction)
            if(config?.limit) cursor.limit(config.limit)
            const response = await cursor.toArray() as Response[]
            return response
        }
    async test<K extends keyof GeneratedTypes.TestsData>(filter:Filter<GeneratedTypes.TestsData>,select?:{[P in K]:true|{[key:string]:any}}){
            const object = await db.collection("tests").findOne(filter,{ projection:select }) as any ;
            if(object) object['_id']=object['_id'].toString()
            const response = object as typeof select extends undefined ? GeneratedTypes.TestsData : Pick<GeneratedTypes.TestsData, K> & { _id:string }
            return response
        }
        async tests<K extends keyof GeneratedTypes.TestsData>(filter:Filter<GeneratedTypes.TestsData>,select?:{[P in K]:true|{[key:string]:any}},config?:Config<GeneratedTypes.TestsData>){
            type Response = typeof select extends undefined ? GeneratedTypes.TestsData : Pick<GeneratedTypes.TestsData, K> & { _id:string }
            const cursor = db.collection("tests").find(filter,{ projection:select }).map(((data:any)=>{ data['_id']=data['_id'].toString() ; return data}))
            if(config?.skip) cursor.skip(config.skip)
            if(config?.sort) cursor.sort(config.sort.key,config.sort.direction)
            if(config?.limit) cursor.limit(config.limit)
            const response = await cursor.toArray() as Response[]
            return response
        }
    async users<K extends keyof GeneratedTypes.UsersData>(filter:Filter<GeneratedTypes.UsersData>,select?:{[P in K]:true|{[key:string]:any}}){
            const object = await db.collection("users").findOne(filter,{ projection:select }) as any ;
            if(object) object['_id']=object['_id'].toString()
            const response = object as typeof select extends undefined ? GeneratedTypes.UsersData : Pick<GeneratedTypes.UsersData, K> & { _id:string }
            return response
        }
        async users<K extends keyof GeneratedTypes.UsersData>(filter:Filter<GeneratedTypes.UsersData>,select?:{[P in K]:true|{[key:string]:any}},config?:Config<GeneratedTypes.UsersData>){
            type Response = typeof select extends undefined ? GeneratedTypes.UsersData : Pick<GeneratedTypes.UsersData, K> & { _id:string }
            const cursor = db.collection("users").find(filter,{ projection:select }).map(((data:any)=>{ data['_id']=data['_id'].toString() ; return data}))
            if(config?.skip) cursor.skip(config.skip)
            if(config?.sort) cursor.sort(config.sort.key,config.sort.direction)
            if(config?.limit) cursor.limit(config.limit)
            const response = await cursor.toArray() as Response[]
            return response
        }
}

export class Update {
    async post(filter:Filter<GeneratedTypes.PostsData>,dataToSet:SetData<GeneratedTypes.PostsData>,){
        return db.collection("posts").updateOne(filter,{$set:dataToSet})
    }
    async posts(filter:Filter<GeneratedTypes.PostsData>,dataToSet:SetData<GeneratedTypes.PostsData>,){
        return db.collection("posts").updateMany(filter,{$set:dataToSet})
    }
    async test(filter:Filter<GeneratedTypes.TestsData>,dataToSet:SetData<GeneratedTypes.TestsData>,){
        return db.collection("tests").updateOne(filter,{$set:dataToSet})
    }
    async tests(filter:Filter<GeneratedTypes.TestsData>,dataToSet:SetData<GeneratedTypes.TestsData>,){
        return db.collection("tests").updateMany(filter,{$set:dataToSet})
    }
    async users(filter:Filter<GeneratedTypes.UsersData>,dataToSet:SetData<GeneratedTypes.UsersData>,){
        return db.collection("users").updateOne(filter,{$set:dataToSet})
    }
    async users(filter:Filter<GeneratedTypes.UsersData>,dataToSet:SetData<GeneratedTypes.UsersData>,){
        return db.collection("users").updateMany(filter,{$set:dataToSet})
    }
}

export class Delete {
    async post(filter:Filter<GeneratedTypes.PostsData>){
        return db.collection("posts").deleteOne(filter)
    }
    async posts(filter:Filter<GeneratedTypes.PostsData>){
        return db.collection("posts").deleteMany(filter)
    }
    async test(filter:Filter<GeneratedTypes.TestsData>){
        return db.collection("tests").deleteOne(filter)
    }
    async tests(filter:Filter<GeneratedTypes.TestsData>){
        return db.collection("tests").deleteMany(filter)
    }
    async users(filter:Filter<GeneratedTypes.UsersData>){
        return db.collection("users").deleteOne(filter)
    }
    async users(filter:Filter<GeneratedTypes.UsersData>){
        return db.collection("users").deleteMany(filter)
    }
}

export class Insert {
     async post(data:Omit<GeneratedTypes.PostsData,"_id">){
            return db.collection("posts").insertOne(data)
        }
     async posts(data:Omit<GeneratedTypes.PostsData,"_id">[]){
            return db.collection("posts").insertMany(data)
        }
     async test(data:Omit<GeneratedTypes.TestsData,"_id">){
            return db.collection("tests").insertOne(data)
        }
     async tests(data:Omit<GeneratedTypes.TestsData,"_id">[]){
            return db.collection("tests").insertMany(data)
        }
     async users(data:Omit<GeneratedTypes.UsersData,"_id">){
            return db.collection("users").insertOne(data)
        }
     async users(data:Omit<GeneratedTypes.UsersData,"_id">[]){
            return db.collection("users").insertMany(data)
        }
}
export default { Find:new Find,Update:new Update,Delete:new Delete,Insert:new Insert }