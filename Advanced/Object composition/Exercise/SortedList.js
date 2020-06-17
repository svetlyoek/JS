function solve() {

    const collection = [];

    const instance = {

        add,
        remove,
        get,
        size: 0
    };

    function add(element) {

        collection.push(element);
        collection.sort(sort);
        instance.size++;
        return instance;
    }

    function remove(index) {

        isInRange(index);
        collection.splice(index, 1);
        instance.size--;
        return instance;
    }

    function get(index) {

        isInRange(index);

        return collection[index];
    }

    function isInRange(index) {

        if (index < 0 || index >= collection.length) {

            throw new Error('Index outside of range!');
        }
    }

    function sort(a, b) {

        return a - b;
    }

    return instance;
}




