function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  return factorial(n - 1) * n;
}

console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
console.log(factorial(10)); // 3628800
