class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {

        Company.validateParams([username, salary, position, department]);

        if (salary < 0) {
            throw new Error('Invalid input!');
        }

        let currentDep = this.departments.find(n => n.name === department);

        if (currentDep !== undefined) {

            let newEmployee = {
                username: username,
                salary: salary,
                position: position,
            };

            currentDep.employees.push(newEmployee);

            this.departments.push(currentDep);

        } else if (currentDep === undefined) {

            let newDepartment = {
                name: department,
                employees: [],
            };

            let employee = {
                username: username,
                salary: salary,
                position: position,
            };

            newDepartment.employees.push(employee);

            this.departments.push(newDepartment);
        }

        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment() {

        const departments = this.departments.map(d => {

            const dep = {
                name: d.name,
                employees: d.employees.slice(),
            };

            let total = 0;

            for (let employee of dep.employees) {
                total += employee.salary;
            }

            dep.averageSalary = total / dep.employees.length;

            return dep;
        });

        departments.sort((a, b) => b.averageSalary - a.averageSalary);

        const bestDep = departments[0];

        if (bestDep !== 'undefined') {
            bestDep.employees.sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));
            const result = [
                `Best Department is: ${bestDep.name}`,
                `Average salary: ${bestDep.averageSalary.toFixed(2)}`,
            ];

            bestDep.employees.forEach(e => result.push(`${e.username} ${e.salary} ${e.position}`));
            return result.join('\n');
        }
    }

    static validateParams(params) {

        params.forEach(p => {
            if (p === 'undefined' || p === null || p === '') {
                throw new Error('Invalid input!');
            }
        });
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());


