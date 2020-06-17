function solve(input) {

    const result = new Map();

    let manager = {

        create: ([name, , parentName]) => {

            let parent = parentName ? result.get(parentName) : null;

            let newObj = Object.create(parent);

            result.set(name, newObj);

            return newObj;

        },

        set: ([name, key, value]) => {

            let obj = result.get(name);

            obj[key] = value;
        },

        print: ([name]) => {

            let obj = result.get(name);

            let properties = [];

            Object.keys(obj).forEach(key => properties.push(`${key}:${obj[key]}`));

            while (Object.getPrototypeOf(obj)) {

                Object.keys(Object.getPrototypeOf(obj)).forEach(key => properties.push(`${key}:${Object.getPrototypeOf(obj)[key]}`));

                obj = Object.getPrototypeOf(obj);
            }

            console.log(properties.join(', '));
        }
    };

    for (let line of input) {

        let tokens = line.split(' ');
        let command = tokens.shift();
        manager[command](tokens);
    }

}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);

