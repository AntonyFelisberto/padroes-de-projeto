(()=> {

    interface Movie{
        title:string,
        description:string,
        rating:number,
        cast:string[]
    }

    const filesToEvaluate = [
        {id:1,flag:false}
    ]

    const arquivos = filesToEvaluate.map(f => f.flag)

    class AbstractUser{}
    class UserMixin{}
    class UserImplementation{}
    interface IUser{}

    const date = new Date()
    const elapsedTimeInDays:number = 23
    const numberOfFiles = 33
    const nome = "ads"
    const apelido = "fer"
    const daysSinceModification = 12
    const max = 13

    const temperaturas = [33.6, 12.34];

    const ip = '123.123.123.123';

    const usuarios = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    const emails = usuarios.map( u => u.email );

    const canJump = false;
    const canRun = true;
    const hasItems = true;
    const isLoading = false;

    const tempoInicial = new Date().getTime();

    const tempoFinal = new Date().getTime() - tempoInicial;

    function getBooks() {
        throw new Error('Function not implemented.');
    }

    function getBooksUrl( u: string) {
        throw new Error('Function not implemented.');
    }

    function getSquareArea( s: number ) {
        throw new Error('Function not implemented.');
    }

    function printJobIfJobIsActive() {
        throw new Error('Function not implemented.');
    }

    function getMovieById(movieId:string){
        console.log({movieId})
    }

    function getMovieCastById(id:string){
        console.log({id})
    }

    function getActorBioById(actorId:string){
        console.log({actorId})
    }

    function movie({title,description,rating,cast}:Movie){
        console.log({title,description,rating,cast})
    }

    function createActor(fullName:string,birthday:Date):boolean{
        if (fullName === "artorias") return false;
        console.log("creado ator",birthday)
        return true;
    }

    const getPayAmount = ({isDead = false,isSeparated = true,isRetired=false}) => {
        let result: number;

        if (isDead){
            return 1500;
        }
        
        if(isSeparated){
            return 2500; 
        }
        
        return (isRetired) ? 3000 : 4000;
    }

    function isRedFruit( fruit: string ): boolean {
        const redFruits = ['manzana','cereza','ciruela'];
        return redFruits.includes(fruit);
    }

    type FruitColor = 'red'|'yellow'|'purple';

    function getFruitsByColor( color: FruitColor ): string[] {

        const fruitsByColor = {
            red:    ['manzana','fresa'],
            yellow: ['piña','banana'],
            purple: ['moras','uvas'],
        };

        if ( !Object.keys( fruitsByColor ).includes(color) ) {
            throw Error('the color must be: red, yellow, purple');
        }
        
        return fruitsByColor[color];

    }

    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = false;

    function workingSteps() {
        if ( !isFirstStepWorking ) return 'First step broken.';
        if ( !isSecondStepWorking ) return 'Second step broken.';
        if ( !isThirdStepWorking ) return 'Third step broken.';
        if ( !isFourthStepWorking ) return 'Fourth step broken.';
        return 'Working properly!';
    }

    console.log({ isRedFruit: isRedFruit('cereja'), fruit: 'cereja' });
    console.log({ isRedFruit: isRedFruit('pinho'), fruit: 'pinho' });
    console.log({ redFruits: getFruitsByColor('red') });
    console.log({ yellowFruits: getFruitsByColor('yellow') });
    console.log({ purpleFruits: getFruitsByColor('purple') });
    console.log({ workingSteps: workingSteps() });
})()