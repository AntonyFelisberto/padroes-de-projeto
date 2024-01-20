(()=>{
    type Gender = 'M'|'F';

    class Person {
        constructor(public name:string,public gender:Gender,public birthday:Date){}
    }
    
    class User extends Person {

        public lastAcessDate:Date

        constructor(public email:string,public role:string,public name:string, public gender:Gender,public birthday:Date){
            super(name,gender,birthday)
            this.lastAcessDate == new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    class UserSettings extends User {
        constructor(public workingDirectory:string,public lastFolderOpen:string,public email:string,public role:string,public name:string,public gender:Gender,public birthday:Date){
            super(email,role,name,gender,birthday)
        }
    }
    
    const userSettings = new UserSettings(
        "home",
        "homes",
        "artorias@google.com",
        "admin",
        "adonos",
        "M",
        new Date("2019-19-21")
    )

})()