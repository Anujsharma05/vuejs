//async returns promise
//await makes the later code in function as asynchronous


async function getData() {
    console.log('inside getData');
    const response = await fetch('https://api.github.com/users');
    console.log('response received');
    const data = await response.json();
    console.log('data converted to json');
    return data;
    // return "anuj";
}

console.log('before calling getData');
const a = getData();
console.log('after calling getData');
// console.log('print a: ' + a);
a.then(data => console.log(data))
console.log('end of code');