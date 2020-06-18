function solve() {

    const instance = Object.create({});

    instance.extend = function (template) {

        for (let prop in template) {

            if (typeof template[prop] === 'function') {
                Object.getPrototypeOf(instance)[prop] = template[prop];
            } else {
                instance[prop] = template[prop];
            }
        }
    };

    return instance;
}


