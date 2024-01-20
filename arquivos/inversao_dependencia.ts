import localPosts from './local-database.json'

export class JsonDatabaseService {
    async getPosts():Promise<Post[]> {
        return localPosts;
    }
}

export class LocalDataBaseService {
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

    constructor(private postProvider:JsonDatabaseService){}

    async getPosts(){
        //const jsonDb = new LocalDataBaseService();
        //this.posts = await jsonDb.getFakePosts();

        //const jsonDb = new JsonDatabaseService();
        //this.posts = await jsonDb.getPosts();

        this.posts = await this.postProvider.getPosts();
        return this.posts;
    }
}

(async() => {
    const provider = new JsonDatabaseService();
    const postService = new PostService(provider);
    const posts = await postService.getPosts();
    console.log({ posts });
})