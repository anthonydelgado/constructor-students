var Class = require('./class.js');


//fun fact: Beersville is a real city in PA!!!
var RBC = new Class('Rutgers Coding Bootcamp','Full Stack Javascript', 'JC');

//none
console.log('Are there any students?', RBC.alumni);

// Student(studentName, studentSubject, studentGPA)
RBC.addStudent('Anthony', 'React', 4);

console.log('Are there any students?', RBC.alumni);
console.log('How many students?', RBC.count);

RBC.addStudent('Joe', 'React', 4);
RBC.addStudent('Juanita', 'React', 4);
RBC.addStudent('Nate', 'React', 4);
RBC.addStudent('Al', 'React', 4);

console.log('Are there any students?', RBC.alumni);
console.log('How many students?', RBC.count);


//fun fact: Beersville is a real city in PA!!!
var DEVBC = new Class('devBootcamp','Full Stack Ruby', 'NYC');

//none
console.log('Are there any students?', DEVBC.alumni);
console.log('How many students?', DEVBC.count);

// Student(studentName, studentSubject, studentGPA)
DEVBC.addStudent('Anthony', 'React', 4);

console.log('Are there any students?', DEVBC.alumni);
console.log('How many students?', DEVBC.count);

DEVBC.addStudent('Joe', 'React', 4);
DEVBC.addStudent('Juanita', 'React', 4);

console.log('Are there any students?', DEVBC.alumni);
console.log('How many students?', DEVBC.count);
