
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

    constructor(){}

    async getPosts(){
        const jsonDb = new LocalDataBaseService();
        this.posts = await jsonDb.getFakePosts();
        return this.posts;
    }
}

(async() => {
    const postService = new PostService();
    const posts = await postService.getPosts();
    console.log({ posts });
})