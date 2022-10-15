const getBtn = document.getElementById('getBtn');
const postBtn = document.getElementById('postBtn');
const limitBtn = document.getElementById('limitBtn');

const obj = {
    key1: 'test',
    key2: 'test test',
    key3: testFun
}

getBtn.addEventListener('click', getReq);
postBtn.addEventListener('click', postReq);
limitBtn.addEventListener('click', getLimits);

function testFun() {
    console.log('test fun called');
}

function myMethod() {
    obj.key3();
}

//XHR Practice
function getReq() {
    console.log('btn clicked');

    //creating xhr object
    const xhr = new XMLHttpRequest();
    //define the type of request (true means async, false ie sync is deprecated)
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    //loading state
    xhr.onprogress = function() {
        console.log('request is under progress');
    }
// console.log(this.status);  //will work inside xhr object code
    xhr.onload = function() {
        console.log('what happens when response is received');
        if(this.status === 200) {
            // console.log(this.response);
            const result = JSON.parse(this.response);
            console.log(result);
        } else {
            console.log('error occurred');
        }
    }

    //send the request to the server
    xhr.send();

    console.log('we are done!');
}

function postReq() {
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.setRequestHeader('content-type', 'application/json');

    xhr.onprogress = function() {
        //do nothing
    }

    xhr.onload = function() {
        console.log(this.response);
    }

    const params = JSON.stringify({
        title: 'michael',
        body: 'thats what she said',
        userId: 69,
      });

    xhr.send(params);
}

//calling backend for test purpose
function getLimits() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://localhost:8080/limits', true);

    xhr.onprogress = function() {
        console.log('request under progress');
    }

    xhr.onload = function() {
        console.log(this.response);
    }

    xhr.send();
}





