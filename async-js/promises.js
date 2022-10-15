//promise can be => resolve, reject, pending

const arr = ['apple', 'ball', 'cat', 'dog'];

function arrMethod() {
    for(let i in arr) {
        console.log(arr[i]);
    }
}

const a = arrMethod();
console.log(a);

const promiseBtn = document.getElementById('promiseBtn');

const students = [
    { name: 'Anuj', subject: 'Java'},
    { name: 'Tanjiro', subject: 'Demon Hunting'}
];

let newStudent = { name: 'Michael', subject: 'Sales' };

promiseBtn.addEventListener('click', initMethod);

function enrollStudent(student) {

    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            students.push(student);
            
            const success = true;

            if(success) {
                console.log('student enrolled successfully');
                resolve('promise resolved');
            } else {
                reject('enrollment failed');
            }
        }, 3000);
    })
}

function fetchStudents(message) {

    console.log('message from promise:' + message);
    setTimeout(function() {
        console.log(students);
    }, 1000);
}

function errorMethod(error) {
    console.log('error occurred: ' + error);
}

function initMethod() {
    enrollStudent(newStudent).then(fetchStudents).catch(errorMethod);
}
// enrollStudent(newStudent, fetchStudents);
// fetchStudents();