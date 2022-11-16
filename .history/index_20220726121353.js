function sumOfAllNumbersUntilOne(n) {
  if(n < 0) throw new Error('Number must be higher than 0')
  
  let sum = 0;

  for(let i = 1;i <= n;i++){
    sum = sum + i
  }

  return sum
}

console.log(sumOfAllNumbersUntilOne(5))