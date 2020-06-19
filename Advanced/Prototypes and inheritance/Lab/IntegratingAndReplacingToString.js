function solve() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {

            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
        }
    };

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {

            return super.toString().substr(0, super.toString().length - 1) + `, course: ${this.course})`;
        }
    };

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {

            return super.toString().substr(0, super.toString().length - 1) + `, subject: ${this.subject})`;
        }
    };

    return {
        Person,
        Student,
        Teacher
    };
}

let func = solve();
let person = new func.Person('Ivan', 'ivan@gmail.com');
let student = new func.Student('Dimitar', 'dim@abv.bg', 'JS');
let teacher = new func.Teacher('Dimo', 'dimo_90@gmail.com', 'Math');

console.log(person);
console.log(student);
console.log(teacher);

console.log('\n');

console.log(person.toString());
console.log(student.toString());
console.log(teacher.toString());





