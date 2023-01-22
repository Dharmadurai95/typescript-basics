// sometimes we don't know what input will come, based on the input we will return out put 
// here is generic type comes into picture

function genericOne<Type>(val: Type): Type {
    return val;
}

function arrayInput<T>(data: T[]): T {
    return data[5]
}

const arrayInputTwo = <T>(data:T[]):T=>{
    return data[0]
}
genericOne(true)


