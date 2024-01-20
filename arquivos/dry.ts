type Size = '' | 'S' | 'M' | 'XL'

class Product {
    constructor(public name: string,public size:Size = '',public price: number = 0){}

    isProductReady(){
        for(const key in this){
            switch(typeof this[key]){
                case "string":
                    if((<string><unknown>this[key]).length <= 0) throw Error(`${key} is empty`)
                break;
                case "number":
                    if((<number><unknown>this[key]) <= 0) throw Error(`${key} is 0`)
                break;
                default:
                    throw Error(`${typeof this[key]} is not a valid`)
            }
        } 
        return true;
    }

    toString(){
        //REPEATABLE
        if (this.name.length <= 0) throw Error("name is empty")
        if (this.size.length <= 0) throw Error("size is empty")
        if (this.price <= 0) throw Error("price is zero")

        //NO REPEATABLE
        if(!this.isProductReady) return;
        return `${this.name} (${this.price}), ${this.size}`
    }
}
(()=> {
    const bluePants = new Product("pANTS");
    console.log(bluePants)
})()