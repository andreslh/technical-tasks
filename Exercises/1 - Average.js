// Create a function that returns the average of the numbers. It should validate that only positive numbers are entered.

const arrayExample = [2, 4, 6, 8];

const average = (array) => {
  const sum = array.reduce(
    (sum, number) => {
      if (typeof number !== 'number' || number < 0) {
        throw new Error('Input must be only positive numbers');
      }
      return sum + number;
    }, 0);
  return sum / array.length;
};

try {
  console.log(average(arrayExample));
} catch (e) {
  console.log(e);
}
