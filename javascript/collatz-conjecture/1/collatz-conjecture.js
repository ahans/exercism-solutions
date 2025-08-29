//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n) => {
  if (n <= 0) {
    throw Error('Only positive integers are allowed');
  }
  let steps = 0;
  for (; n !== 1; steps++) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
  }
  return steps;
};
