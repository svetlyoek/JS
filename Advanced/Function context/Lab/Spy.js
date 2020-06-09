function Spy(target, method) {

    let originalFunction = target[method];

    let result = {
        count: 0
    }

    target[method] = function () {
        result.count++;
        return originalFunction.apply(this, arguments);
    }

    return result;
}

let spy = Spy(console, "log");

console.log(spy); // { count: 1 }
console.log(spy); // { count: 2 }
console.log(spy); // { count: 3 }

