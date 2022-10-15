const callbackBtn = document.getElementById('callbackBtn');

//CallBack Function - When reference of function is passed 
//as argument to another function(function within function)

const students = [
    { name: 'Anuj', subject: 'Java'},
    { name: 'Tanjiro', subject: 'Demon Hunting'}
];

let newStudent = { name: 'Michael', subject: 'Sales' };

callbackBtn.addEventListener('click', initMethod);

function initMethod() {
    enrollStudent(newStudent, fetchStudents);
}

function enrollStudent(student, callbackFetchStudents) {
    setTimeout(function() {
        students.push(student);
        console.log('student enrolled successfully');
        callbackFetchStudents();
    }, 3000);
}

function fetchStudents() {
    setTimeout(function() {
        console.log(students);
    }, 5000);
}


// enrollStudent(newStudent, fetchStudents);
// fetchStudents();