const Singleton = (function () {
    let instance;

    function createInstance(){
        return new Object("i am the instance");
    }

    return {
        getInstance(){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function main(){
    const instance = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    console.log(instance === instance2);
}

main();