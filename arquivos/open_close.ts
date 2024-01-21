import axios from 'axios'

(async ()=> {

    const httpClient = new HttpClient();

    const todoService = new TodoService(httpClient);
    const postService = new PostService(httpClient);
    const photosService = new PhotosService(httpClient);

    const todos = await todoService.getTodosItems()
    const photos = await photosService.getPhotos()
    const posts = await postService.getPosts();

    console.log({todos,posts,photos})
})()

export class TodoService {

    constructor(private http: HttpClient){}

    async getTodosItems(){
        //const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos/")
        const {data} = await this.http.get("https://jsonplaceholder.typicode.com/todos/")
        return data
    }
}

export class PostService {

    constructor(private http: HttpClient){}

    async getPosts(){
        //const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
        const {data} = await this.http.get("https://jsonplaceholder.typicode.com/posts")
        return data
    }
}

export class PhotosService {

    constructor(private http: HttpClient){}

    async getPhotos(){
        //const {data} = await axios.get("https://jsonplaceholder.typicode.com/photos")
        const {data} = await this.http.get("https://jsonplaceholder.typicode.com/photos")
        return data
    }
}

export class HttpClient {
    async get(url:string){
        //const resp = await axios.fetch(url)
        //const data = await rsp.json()
        //return {data,status: resp.status}
        
        const {data,status} = await axios.get(url)
        return {data,status}
    }
}