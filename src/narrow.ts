type Fish = { swim: () => void };
type Bird = { fly: () => void };
declare function getSmallPet(): Fish | Bird;

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}
// ---cut---
// Both calls to 'swim' and 'fly' are now okay.
let pet = getSmallPet();

if (isFish(pet)) {
    pet.swim();
} else {
    pet.fly();
}



//
interface Circle {
    kind: "circle",
    radius: number
}
interface Square {
    kind: 'square',
    sideLength: number
}
interface Rectangle {
    kind: 'rectangle',
    length: number,
    width: number
}
type Shape = Circle | Square | Rectangle
function getShape(val: Shape) {
    switch (val.kind) {
        case "circle":
            return Math.PI * val.radius ** 2
        case "rectangle":
            return val.length * val.width
        case "square":
            return val.sideLength * val.sideLength;

        default:
            const _defaultForShape: never = val;
            return _defaultForShape;
    }
}