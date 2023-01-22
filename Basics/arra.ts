//number of array
const herosAge: number[] = [13, 32, 3, 6, 54, 2, 31, 54, 45];
const herosAgTwo: Array<number> = [13, 32, 3, 6, 54, 2, 31, 54, 45];

//array of strings

const herosName: string[] = ['thor', 'badman', 'hulk']
const herosNameTwo: Array<string> = ['thor', 'badman', 'hulk'];


//array of object

interface USERS {
    name: string;
    age: number
}
const usersList: USERS[] = [
    { name: "dharma", age: 25 },
    { name: "durai", age: 35 },
    { name: "match", age: 5 },
]
const usersListTwo: Array<USERS> = [
    { name: "dharma", age: 25 },
    { name: "durai", age: 35 },
    { name: "match", age: 5 },
]


//array of array of number

const MLModels:number[][]=[
    [213,235,3421,564],
    [125,3222,333]
]

// array of array of anything

const Random :(number|string)[][]=[
    ['dharma',12],
    [12,236,85]
]