//customSort function which accepts an array of integers and sorts it in ascending order by the sum of the digits of the elements

const array = [3, 54, 49, 12, 2, 52];
// expected output: [ 2, 3, 12, 52, 53, 49 ]

const sumDigits = (number) =>
  number
    .toString()
    .split('')
    .reduce((acc, num) => acc + parseInt(num), 0);
const sort = (array) => [...array].sort((a, b) => sumDigits(a) - sumDigits(b));
sort(array);
