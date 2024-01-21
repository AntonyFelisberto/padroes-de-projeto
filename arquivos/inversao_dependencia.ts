import localPosts from './local-database.json'

export abstract class PostProvider {
    abstract getPosts():Promise<Post[]>
}

export class JsonDatabaseService implements PostProvider{
    async getPosts():Promise<Post[]> {
        return localPosts;
    }
}

export class LocalDataBaseService implements PostProvider {
    getPosts(): Promise<Post[]> {
        throw new Error('Method not implemented.');
    }

    async getFakePosts(){
        return [
            {
                "userId":1,
                "id":1,
                "title":"texto descricao",
                "body":"corpo para o texto"
            }
        ]
    }
}

export interface Post{
    body:string
    id: number
    title:string
    userId: number
}

export class PostService {
    private posts:Post[] = [];

    constructor(private postProvider:PostProvider){}

    async getPosts(){
        //const jsonDb = new LocalDataBaseService();
        //this.posts = await jsonDb.getFakePosts();

        //const jsonDb = new JsonDatabaseService();
        //this.posts = await jsonDb.getPosts();

        this.posts = await this.postProvider.getPosts();
        return this.posts;
    }
}
export class WebApiPostService implements PostProvider {
    async getPosts():Promise<Post[]> {
        return (await fetch("http://jsonplaceholder.typicode.com/posts")).json();
    }
    
}

(async() => {
    const providerWeb = new WebApiPostService();
    const provider = new JsonDatabaseService();
    const postService = new PostService(provider);
    const posts = await postService.getPosts();
    console.log({ posts });
})