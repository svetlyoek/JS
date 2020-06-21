function solve() {
    class Employee {
        constructor(name, age) {
            if (this.constructor.name === 'Employee') {
                throw new Error('Can not initialize abstract class!');
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work() {

            let currentElement = this.tasks.shift();
            this.tasks.push(currentElement);

            console.log(currentElement);
        }

        collectSalary() {

            console.log(`${this.name} received ${this.salary} this month.`);
        }
    };

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);

            this.tasks = [`${this.name} is working on a simple task.`];
        }
    };

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [`${this.name} is working on a complicated task.`,
            `${this.name} is taking time off work.`,
            `${this.name} is supervising junior workers.`];
        }
    };

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks = [`${this.name} scheduled a meeting.`,
            `${this.name} is preparing a quarterly report.`];
        }

        collectSalary() {

            console.log(`${this.name} received ${this.salary + this.dividend} this month.`)
        }
    };

    return {
        Employee,
        Junior,
        Senior,
        Manager
    };
}

let func = solve();

let junior = new func.Junior('Petko', 30);
junior.salary = 1200;
let senior = new func.Senior('Dido', 89);
senior.salary = 5600;
let manager = new func.Manager('Loshiq', 18);
manager.salary = 7000;
manager.dividend = 1000;

manager.work();
manager.work();
manager.work();
manager.work();

junior.collectSalary();
senior.collectSalary();
manager.collectSalary();

console.log(junior);
console.log(senior);
console.log(manager);
