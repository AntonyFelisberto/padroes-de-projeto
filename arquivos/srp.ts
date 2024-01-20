(()=>{
    interface Product {
        id:number
        name:string
    }

    class ProductService{
        getProduct(id:number){
            console.log("Product: ",{id,name:"Oled TV"})
        }

        saveProduct(product:Product){
            console.log("Guardando base de dados: ",{product})
        }
    }

    class Mailer {
        private masterEmail:string = "artorias@gmail.com"

        sendEmail(emailList:string[],template:"to-clients" | "to-admins"){
            console.log("enviando email para clientes ",template)
        }

    }

    class ProductBloc {

        private productService:ProductService;
        private mailer:Mailer;

        constructor(productService:ProductService, mailer:Mailer){
            this.productService = productService;
            this.mailer = mailer
        }

        loadProduct(id:number){
            this.productService.getProduct(id)
        }

        saveProduct(product:Product){
            this.productService.saveProduct(product)
        }

        notifyClients(){
            this.mailer.sendEmail(["artorias@gmail.com"],"to-clients")
        }
    }

    class CartBloc {
        private itemsInCart: Object[] = [];

        addToCart(productId:number){
            console.log("agregando produtos ",productId)
        }
    }

    const productService = new ProductService();
    const mailer = new Mailer();
    const productBloc = new ProductBloc(productService,mailer)
})()