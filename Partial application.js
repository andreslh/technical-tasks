// Base function
function sum(a, b) {
  return a + b;
}

// Partial application function
function partApply(f, x) {
  return function (y) {
    return f(x, y);
  };
}

const add5 = partApply(sum, 5);

add5(2);
