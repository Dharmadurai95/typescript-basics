
// @@ public we can access inside outside and inheritance  classes 
// @@ private we can access inside  classes 
// @@ protected we can access inside and inheritance  classes 


class User {
    name: string
    age: number
    readonly email = '';
    protected dbPassword = 'dharmaduraiDatabase';
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

}

class Inheritance extends User {
    constructor(public name: string, public age: number, public pass: string,) {
        super(name, age);
    }

    updateDbPass(): void {
        this.dbPassword = 'new password';
    }
}

class ANOTHERUSER {
    age: number;
    constructor(public name: string, age: number, private password: string) {
        this.name = name;
        this.age = age;
        this.password = password;
    }
    public get getPassword(): string {
        return `your password is ${this.password}`
    }

    public set updatePassword(pass: string) {
        this.password = pass;
    }

    //this only available inside the class
    private deleteAuthoToke() {
        console.log("delete token")
    }
}




const createUser = new User("Dharmadurai", 2);
console.log(createUser.age);
console.log(createUser.email);
// createUser.email = 'dharmamech365@gmail.com' this will through error because this property readonly


const anotherUser = new ANOTHERUSER("dharma", 28, 'dharmamech3695@gmail.com');
console.log(anotherUser.age);
console.log(anotherUser.age);
// console.log(anotherUser.password); this will through error because this is private property
// but you can access the password through calling method
console.log(anotherUser.getPassword)

// update the password through setter method

anotherUser.updatePassword = 'dharmadurai#@!$%^';

console.log(anotherUser.getPassword)



