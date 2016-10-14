// The first constructor function is called "Student" and has the following properties within it...
// Name of the student
// Favorite subject
// Current GPA


var Student = function (studentName, studentSubject, studentGPA) {

    this.name = studentName;
    this.subject = studentSubject;
    this.gpa = studentGPA;
};


module.exports = Student;