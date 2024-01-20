type Gender = "M"|"F"

interface PersonProps {
    firstName: string,
    lastName: string
    gender: Gender,
    birthday: Date
}

class Person {
    public firstName: string
    public lastName: string
    public gender: Gender
    public birthday: Date

    constructor({firstName, lastName, gender, birthday}:PersonProps){
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.birthday = birthday
    }
}

interface UserProps{
    email: string
    role: string
}

class User {
    public email: string
    public role: string
    private lastAccess: Date

    constructor({email, role}:UserProps){
        this.lastAccess = new Date()
        this.email = email
        this.role = role
    }

    checkValidation(){
        return true
    }
}

interface SettingProps {
    lastFolderOpen: string
    workingDirectory: string
}

class Setting {
    public workingDirectory: string
    public lastFolderOpen: string

    constructor({workingDirectory, lastFolderOpen}:SettingProps){
        this.workingDirectory = workingDirectory
        this.lastFolderOpen = lastFolderOpen
    }
}

interface UserSettingsProps {
    birthday: Date
    email:string
    gender:Gender
    lastFolderOpen: string
    firstName:string
    lastName:string
    role:string
    workingDirectory:string
}

class UserSettings {
    public person: Person
    public user: User
    public settings: Setting

    constructor({birthday,email, gender, lastFolderOpen, firstName, lastName,role,workingDirectory}:UserSettingsProps){
        this.person = new Person({firstName,lastName,gender,birthday})
        this.user = new User({email,role})
        this.settings = new Setting({workingDirectory,lastFolderOpen})

    }
}
