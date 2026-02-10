// Main function that takes marks, assignment marks, and a callback
function calculateResult(examMarks, assignmentMarks, callback) {
  console.log("Calculating result...");

  // total marks calculation
  const totalMarks = examMarks + assignmentMarks;

  // call the callback with total marks
  callback(totalMarks);
}

// Callback function to check pass or fail
function checkPassFail(total) {
  console.log("Total Marks:", total);

  // condition for pass/fail
  if (total >= 40) {
    console.log("Result: PASSED");
  } else {
    console.log("Result: FAILED");
  }
}

// Function call
calculateResult(35, 20, checkPassFail);




let numbers = [10, 25, 30, 40, 50];
console.log(numbers);
const squaredArray = numbers.map(num => num * num);
console.log(squaredArray);
const evennum=numbers.filter(num=>num%2===0);
console.log(evennum)
const sqnew=evennum.map(num=>num*num);
console.log(sqnew)
const sum = sqnew.reduce((total, num) => total + num, 0);
console.log("Sum of squared even numbers:", sum);