function solve(arguments, criteria) {

    class Ticket {
        constructor(line) {
            const [destination, price, status] = line.split('|');
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    const comparator = {
        destination: (a, b) => a.destination.localeCompare(b.destination),
        price: (a, b) => a - b,
        status: (a, b) => a.status.localeCompare(b.status),
    }

    return arguments.map(item => new Ticket(item)).sort(comparator[criteria]);
}

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));
console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
));