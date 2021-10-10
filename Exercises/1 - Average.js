// Create a function that returns the average of the numbers. It should validate that only positive numbers are entered.

// Basic solution. Use length from array instead.
const arrayExample = [2, 4, 6];

const average = (array) => {
  const { sum, length } = array.reduce(
    ({ sum, length }, number) => {
      if (typeof number !== 'number' || number < 0) {
        throw new Error('Input must be only positive numbers');
      }
      return { sum: sum + number, length: length + 1 };
    },
    { sum: 0, length: 0 }
  );
  return sum / length;
};

try {
  console.log(average(arrayExample));
} catch (e) {
  console.log(e);
}
