// Write a function using switch case to find the grade of a student based
// on marks obtained
// a. “S grade” if the marks are between 90 and 100.
// b. “A grade” if the marks are between 80 and 90.
// c. “B grade” if the marks are between 70 and 80.
// d. “C grade” if the marks are between 60 and 70.
// e. “D grade” if the marks are between 50 and 60.
// f. “E grade” if the marks are between 40 and 50.
// g. “Student has failed” if the marks are between 0 and 40.
// h. Else output “Invalid marks”.

let marks = 77;
switch (true) {
  case marks <= 100 && 90 < marks:
    console.log("S grade");
    break;
  case marks <= 90 && 80 < marks:
    console.log("A grade");
    break;
  case marks <= 80 && 70 < marks:
    console.log("B grade");
    break;
  case marks <= 70 && 60 < marks:
    console.log("C grade");
    break;
  case marks <= 60 && 50 < marks:
    console.log("D grade");
    break;
  case marks <= 50 && 40 < marks:
    console.log("E grade");
    break;
  case marks <= 40 && 0 < marks:
    console.log("Student has failed");
    break;

  default:
    console.log("Invalid marks");
    break;
}
