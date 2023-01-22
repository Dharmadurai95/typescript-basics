//  union type is combination of multiple types of data that include variable or array whatever 

let score: number | string = 15;

score = 45;
score = 'django';
// score = true this line produce an error

type ADMIN = {
    id: string;
    pass: number
}
type USER = {
    id: number;
    pass: string
}
const userType: ADMIN | USER = {
    id: 'Dharma',
    pass: 123
}
const userTypeTwo: ADMIN | USER = {
    id: 1230,
    pass: "dharma"
}
// const userTypeThree : ADMIN | USER = {  this will produce error 
//     id:1230,
//     pass:1235
// }


function takeId(id: number | string): number | string {
    if (typeof id === 'string') {
        return id.toLowerCase()

    } else {
        return id.toFixed(2)
    }
}


//array

const number: number[] = [1, 2, 3, 4, 5];
const string: string[] = ['dharmar', 'j', 'dur', 'hook'];

// number or array 
const numberOrArray: number[] | string[] = [1, 2, 3, 8, 9, 8];
const numberOrArrayOne: number[] | string[] = ["1", "2", "3", "8", "9", "8"];


//numbers and strings and boolean
const allType: (number | string | boolean)[] = [1, true, 'name']



// we can specify these value only user can set or change

let permission: 'create' | 'read' | 'update';
permission = 'create';
permission = 'read';
permission = 'update';
// permission = 'delete';   user can't give the delete permission


