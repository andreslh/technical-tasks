// Base function
function sum(a, b) {
  return a + b;
}

// Base function
function sumThreeNumbers(a, b, c) {
  return a + b + c;
}

// Basic curry function with fixed number of parameters (2)
function curry(f) {
  return function fA(a) {
    return function fB(b) {
      return f(a, b);
    };
  };
}

// Curried sum function
const curriedSum = curry(sum);

sum(2, 3);
curriedSum(2)(3);

// Mored advanced implementation with indefinite number of parameters
function curryWithMultipleArguments(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

// Curried sum function with advanced curry function
const curriedSumWMA = curryWithMultipleArguments(sum);
const curriedSumWMAThreeNumbers = curryWithMultipleArguments(sumThreeNumbers);

curriedSum(2)(3);
curriedSumWMAThreeNumbers(2)(3)(4);

// Note: It won't work if the original function takes ..args only instead of a fixed number of arguments.
