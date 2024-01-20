(()=>{
    type Gender = 'M'|'F';

    class Person {
        constructor(public name:string,public gender:Gender,public birthday:Date){}
    }
    class User extends Person {
        constructor(public email:string,public role:string,private lastAcess:Date,name:string,gender:Gender,birthday:Date){
            super(name,gender,birthday)
            this.lastAcess == new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    class UserSettings extends User {
        constructor(public workingDirectory:string,public lastFolderOpen:string,email:string,role:string,lastAcess:Date,name:string,gender:Gender,birthday:Date){
            super(email,role,lastAcess,name,gender,birthday)
        }
    }
})()