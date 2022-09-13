// Write a program to find the factorial of all prime numbers between a
// given range . Range will be passed as 2 values in the function
// parameters. eg- if it is needed to find the values for numbers 1-100, then
// function declaration can look like - function prime(1,100).

// function test_prime(n) {
//   if (n === 1) {
//     return false;
//   } else {
//     for (var x = 2; x < n; x++) {
//       if (n % x === 0) {
//         // console.log(ans)
//         return `${n} is a not prime `;
//       } else {
//         console.log(x)
//         return `${n} is a prime`;
//       }
//     }
// let number = n;
// let ans = 1;
// for (let i = number; i > 0; i--) {
//   ans = ans * i;
//   console.log(ans);
// }
//   }
// }

// console.log(test_prime(5));

//final code

function prime(start, end) {
  var p = end;

  for (j = start; j <= p; j++) {
    if (isPrimes(j)) {
      // console.log(j);
      let ans = 1;
      for (let i = j; i > 0; i--) {
        ans = ans * i;
      }
      console.log(`this is prime number ${j} and this is a factorial ${ans} `);
    }
  }
  function isPrimes(n) {
    var primes = true;
    for (i = 2; i < n; i++) {
      if (n % i == 0) {
        primes = false;
        break;
      }
    }
    return primes;
  }
}

prime(1, 5);
