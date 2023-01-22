//string 

let myName: string = "dharmadurai";
//when you declare variable and assign the value immediately then no need to specify the type
let nickName = 'Dharma' // best practice still typescript recognize the type (this is applicable )
console.log(myName);

//number
let myAge: number = 28;
//single params
function addNumber(num: number) {
    return num + 2;

}

//multiple params with default argument

function bioData(name: string, age: number, isMarried: boolean = false) {
    return 'good'
}
//without return 
function notReturn(input: number): void {
    console.log('hello world')
}
// return something
function returnValue(name: string): string {
    return "dharmadurai"
}
function throwError(message:string):never{
    throw new Error(`Error captured: ${message}`)
}
// throwError('Something went wrong')  if we return never rest of the code will not gonna execute

bioData("Dharmadurai", 28)

const heros = ["spiderman","hulk","captain_america"];
heros.map((v):string=> v)

addNumber(82)
export { }