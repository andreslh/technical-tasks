function outer() {
  const name = 'My Name';
  return function inner() {
    return name;
  };
}

const newFunction = outer();

newFunction();

// https://amnsingh.medium.com/lexical-environment-the-hidden-part-to-understand-closures-71d60efac0e0
