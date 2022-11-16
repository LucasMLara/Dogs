function sumOfAllNumbersUntilOne(n) {
  if(n < 0) throw new Error('Number must be higher than 0')
    return n*(1+n)/2
  let sum = 0;

  for(let i = n;i >= 1;i--){                                        
    sum = sum + i
  }

  return sum
}

console.log(sumOfAllNumbersUntilOne(5))