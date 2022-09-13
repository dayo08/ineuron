// Write a program to find whether a given year is a leap year or not.

let a = 3200;

// if (a % 4 == 0) {
//   console.log(`${a} is leap year`);
// } else if (a % 100 == 0 && a % 400 == 0) {
//   console.log(object);
// } else {
//
// }

if (a % 100 == 0) {
  if (a % 400 == 0) {
    console.log(`${a} is a leap year firsr if`);
  } else {
    console.log(`${a} is not a leap year first else`);
  }
} else if (a % 4 == 0) {
  console.log(`${a} is a leap year last if`);
} else {
  console.log(`${a} is not a leap year last else`);
}
