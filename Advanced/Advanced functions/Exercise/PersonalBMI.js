function solve(name, age, weight, height) {

    let person = {

        name: name,
        personalInfo: {
            age: Number(age),
            weight: Number(weight),
            height: Number(height)
        },
        BMI: function () { return Math.round(weight / (Math.pow((height / 100), 2))) }(),
    }
    let status = '';

    if (person.BMI < 18.5) {
        status = 'underweight';
    } else if (person.BMI < 25) {
        status = 'normal';
    } else if (person.BMI < 30) {
        status = 'overweight';
    } else if (person.BMI >= 30) {
        status = 'obese';
    }

    person.status = status;

    if (person.status === 'obese') {
        person.recommendation = 'admission required';
    }

    return person;
}

console.log(solve('Peter', 29, 75, 182));
console.log(solve('Honey Boo Boo', 9, 57, 137));