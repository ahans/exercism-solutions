//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (n) => {
  const digits = Array.from(n + '');
  return digits.reduce((acc, d) => acc + BigInt(d)**BigInt(digits.length), 0n) === BigInt(n);
};
