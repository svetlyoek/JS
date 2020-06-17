function solve(input) {

    let [model, power, color, carriage, wheelsize] = [input.model, Number(input.power), input.color, input.carriage, Number(input.wheelsize)];

    const prototype = {

        model,
    };

    let engineCatalogue = {

        small: {
            power: 90,
            volume: 1800
        },
        normal: {
            power: 120,
            volume: 2400
        },
        monster: {
            power: 200,
            volume: 3500
        }
    };

    let carriagesCatalogue = {

        hatchback: {
            type: 'hatchback',
            color: ''
        },
        coupe: {
            type: 'coupe',
            color: ''
        }
    };

    let obj = Object.create(prototype);
    obj.model = model;

    let engine = {};

    if (power <= engineCatalogue.small.power) {
        engine = engineCatalogue.small;
    } else if (power <= engineCatalogue.normal.power) {
        engine = engineCatalogue.normal;
    } else if (power <= engineCatalogue.monster.power) {
        engine = engineCatalogue.monster;
    }
    obj.engine = engine;
    obj.carriage = carriagesCatalogue[carriage];
    obj.carriage.color = color;
    let size = wheelsize % 2 !== 0 ? wheelsize : wheelsize - 1;
    obj.wheels = new Array(4).fill(size);

    return obj;
}

solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
);
solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
);