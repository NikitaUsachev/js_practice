function checkTicket(number) {
  const numbers = number.split("").map(Number);

  const firstSumOfNum = numbers.slice(0, 3).reduce((acc, num) => acc + num, 0);
  const secondSumOfNum = numbers.slice(3).reduce((acc, num) => acc + num, 0);

  return firstSumOfNum === secondSumOfNum;
}

console.log(checkTicket("005212")); // true
console.log(checkTicket("133700")); // true
console.log(checkTicket("123032")); // false
