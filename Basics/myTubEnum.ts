const streetNumbers: (number | string)[] = [
    'second Street',
    '3rd street',
    1,

]

// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.

const nameAge: [string, number] = ["dharma", 28]
// const nameAgeone:[string,number] = [28,"dharma"] this will produce error because we changed index and also we can't specify more element like this (['dharma',225,'age'])

//example  rgb color only accept numbers
const rgb:[number,number,number] = [200,195,255];
type NUMONLY = [number,number,number];
let RGB:NUMONLY = [200,195,255];

//tubles doesn't prevent the push pop shift unshift 