(()=>{
    type Gender = 'M'|'F';

    interface PersonProps {
        name:string,gender:Gender,birthday:Date
    }

    class Person {

        public name:string
        public gender:Gender
        public birthday:Date

        constructor({name,gender,birthday}:PersonProps){
            this.name = name;
            this.gender = gender;
            this.birthday = birthday
        }
    }

    interface UserProps {
        email:string,
        role:string,
        name:string,
        gender:Gender,
        birthday:Date
    }

    class User extends Person {

        public lastAcessDate:Date
        public email:string
        public role:string

        constructor({email,role,name,gender,birthday}:UserProps){
            super({name,gender,birthday})
            this.lastAcessDate == new Date();
            this.email = email
            this.role = role
        }

        checkCredentials(){
            return true;
        }
    }

    interface UserSettingsProps {
        birthday:Date
        gender:Gender
        email:string
        lastOpenFolder:string
        workingDirectory:string
        role:string
        name:string
    }

    class UserSettings extends User {
        public workingDirectory:string
        public lastOpenFolder:string

        constructor({workingDirectory,lastOpenFolder,email,role,name,gender,birthday}:UserSettingsProps){
            super({email,role,name,gender,birthday})
            this.workingDirectory = workingDirectory
            this.lastOpenFolder = lastOpenFolder
        }
    }
    
    const userSettings = new UserSettings({
        workingDirectory:"home",
        lastOpenFolder:"homes",
        email:"artorias@google.com",
        role:"admin",
        name:"adonos",
        gender:"M",
        birthday:new Date("2019-19-21")
    })

})()