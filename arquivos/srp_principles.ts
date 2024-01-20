(()=>{
    type Gender = "M" | "F"
    
    interface PersonProps {
        birthdate:Date
        gender:Gender
        name:String
    }

    class Person {
        public birthdate:Date
        public gender:Gender
        public name:String

        constructor({name,gender,birthdate}:PersonProps){
            this.name = name
            this.birthdate = birthdate
            this.gender = gender   
        }
    }

    interface UserProps {
        email:String
        role:string
    }

    class User {
        public email:String
        public role:string
        public lastAccess:Date

        constructor({email,role}:UserProps){
            this.lastAccess = new Date()
            this.email = email
            this.role = role
        }

        checkCredentials(){
            return true
        }
    }

    interface SettingsProps {
        lastOpenFolder:string
        workingDirectory:string
    }

    class Settings {
        public workingDirectory:string
        public lastOpenFolder:string

        constructor({workingDirectory,lastOpenFolder}:SettingsProps){
            this.lastOpenFolder = lastOpenFolder
            this.workingDirectory = workingDirectory
        }
    }

    interface UserSettingsProps {
        birthdate:Date
        gender:Gender
        email:string
        lastOpenFolder:string
        workingDirectory:string
        role:string
        name:string
    }

    class UserSettings {
        public person:Person
        public settings:Settings
        public user:User

        constructor({name,email,birthdate,gender,role,lastOpenFolder,workingDirectory}:UserSettingsProps){
            this.person = new Person({name,gender,birthdate})
            this.user = new User({email,role})
            this.settings = new Settings({lastOpenFolder,workingDirectory})

        }
    }

})()