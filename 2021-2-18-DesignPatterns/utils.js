export function sum(num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    throw Error("no number")
  }
  return num1 + num2
}