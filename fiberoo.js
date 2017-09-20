

function fib() {
  let a = 0, b = 1, f = [];
  f.push(a);
  f.push(b);
  for (let i = 2; i <= 99; i++) {
    let sum = a + b;
    f.push(sum);
    a = b;
    b = sum;
  }
  return f;
}

console.log(fib());


function numsToStrings() {
  return _.map(fib(), function (num) {
    return `${num}`;
  });
}

console.log(numsToStrings(fib()));

function numEvenNums() {
  let evenNum =_.filter(fib(), function(num) {
    return num % 2 == 0;
  });
  return evenNum.length;
}

console.log(numEvenNums(fib()));