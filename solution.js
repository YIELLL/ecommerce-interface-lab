function calculateTotal(...numbers) {
  return numbers.reduce((total, n) => {
    if (typeof n !== 'number') throw new TypeError("Error: Incorrect Input, Numbers only.");
    return total + n;
  }, 0);
}