// @@
// Abstract classes can be defined as classes that cannot be instantiated, i.e., whose object reference cannot be created and contains one or more abstract methods within it.
// An abstract method is a method that can only be declared but has no implementation to it. 
// Abstract classes need to be inherited and require subclasses to provide implementations for the method declared in the abstract class.
// it will give the prototype like interface type
// @@

interface BASICABSTRACT {
    name: string,
    age: number
}

// you can mention multiple interface here like comma separate abstract class BASICINFO implements BASICABSTRACT,BASICABSTRACTONE

abstract class BASICINFO {
    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
    }
    abstract getBioData(): void;  // this method should be create when child class
    getCurrentYear(): string {
        return new Date().toDateString()
    }
}

// const basiceInfo = new BASICINFO() Cannot create an instance of an abstract class

class EMPLOYEE extends BASICINFO implements BASICABSTRACT {
    constructor(public name: string, public age: number) {
        super(name, age);
    }
    getBioData(): void {
        console.log("Hello world")
    }
}

const emp = new EMPLOYEE('DHarma',25);

console.log(emp.getCurrentYear())