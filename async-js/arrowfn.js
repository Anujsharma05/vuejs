
// const greet = () => {
//     return {
//         name: 'Anuj'
//     }
// }

//single param does not require parenthesis and body of function
//does not require return keyword or curly braces
const greet = name => "Good morning " + name;

//for multiple params
const greetAndBye = (name, message) => "Good morning " + name + " and " + message;

console.log(greet('Tanjiro'));
console.log(greetAndBye('Inosuke', 'have a nice day'));

//check if variable is null, empty or undefined
let text= '  ';
const bool = !!text.trim();
console.log(bool);

//convert string number to numerical value
const numStr = "56";
console.log(typeof numStr);
const num = +numStr;
console.log(typeof num);


let testVar = '';
//internally converts variable with !!var
if(testVar) {
    console.log('if executed');
} else {
    console.log('else executed');
}

//value as key
const coachId = 'name';
const innerkey = 'inKey'
const innerObj = {
    [innerkey] : {
        a: 'a',
        b: 'b'
    }
}



// const obj = {
//     [coachId]: innerObj
// };

// console.log(obj);

const oldObj = {
    key1: true,
    key2: true,
    key3: true
}

const inputId = 'key2';
const isActive = false;
const obj = {
    ...oldObj,
    [inputId]: isActive
}
console.log(obj);
