function solve(arguments) {

    let collection = [];

    let processor = {
        add: (string) => {
            collection.push(string);
        },
        remove: (string) => {
            collection = collection.filter(i => i !== string);
        },
        print: () => {
            console.log(collection.join(','));
        }
    };

    for (let item of arguments) {

        let [command, string] = item.split(' ');

        if (command === 'print') {
            processor.print();
        } else if (command === 'add') {
            processor.add(string);
        } else if (command === 'remove') {
            processor.remove(string);
        }
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);
