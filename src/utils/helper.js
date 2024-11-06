export function factorial(n) {
  console.log("factorial is getting calculated");

  let ans = 1;

  if (n === 0) return 1;
  for (let i = 2; i <= n; i++) ans = ans * i;
  return ans;
}

//Function to check the number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

//Function to find the nth prime number
export function findNthPrime(n) {
  let count = 0;
  let num = 2;
  while (count < n) {
    if (isPrime(num)) {
      count++;
    }
    num++;
  }
  return num - 1;
}

console.log(findNthPrime(10));
console.log(findNthPrime(100));
