function curry(fn) {
    return function helper(...args) {
      if (args.length === fn.length) { return fn(...args); }
      return function (...newArgs) {
        return helper(...args.concat(newArgs));
      };
    };
  }
  
  function sum(a, b, c) {
    return a + b + c;
  }
  
  const cSum = curry(sum);
  
  console.log(cSum(1)(2)(3));
  console.log(cSum(1, 2)(3));
  console.log(cSum(1, 2, 3));
  console.log(cSum(1)(2, 3));