// The second constructor function is called "Class" and has the following properties within it...
// An array of students within the class
// Number of students in the class
// Name of the professor
// Room number

var Student = require('./student.js');

var Class = function (professor,topic,location) {
    this.alumni = [];
    this.count = 0;
    this.professor = professor;
    this.topic = topic;
    this.location = location;
    this.addStudent = function(studentName, studentSubject, studentGPA){
        this.count+= 1;
        this.alumni.push(new Student(studentName, studentSubject, studentGPA));
    }
}


module.exports = Class;