function outer() {
  const name = 'My Name';
  return function inner() {
    return name;
  };
}

const newFunction = outer();

newFunction();

// https://amnsingh.medium.com/lexical-environment-the-hidden-part-to-understand-closures-71d60efac0e0

function sum(base) {
  return function (number) {
    return base + number;
  };
}

const add5 = sum(5);
const add7 = sum(7);

add5(3);
