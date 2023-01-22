"use strict";
//string 
exports.__esModule = true;
var myName = "dharmadurai";
//when you declare variable and assign the value immediately then no need to specify the type
var nickName = 'Dharma'; // best practice still typescript recognize the type (this is applicable )
console.log(myName);
//number
var myAge = 28;
//single params
function addNumber(num) {
    return num + 2;
}
//multiple params with default argument
function bioData(name, age, isMarried) {
    if (isMarried === void 0) { isMarried = false; }
    return 'good';
}
//without return 
function notReturn(input) {
    console.log('hello world');
}
// return something
function returnValue(name) {
    return "dharmadurai";
}
function throwError(message) {
    throw new Error("Error captured: " + message);
}
throwError('Something went wrong');
bioData("Dharmadurai", 28);
var heros = ["spiderman", "hulk", "captain_america"];
heros.map(function (v) { return v; });
addNumber(82);
