// DO NOT CHANGE THE IMPORTS
import { expect } from 'chai';

// I AM NOT DONE

function calculateGrade(percentage: number) {
  const grade: string;

  if (percentage >= 90) {
    grade = 'A';
  } else if (percentage >= 80) {
    grade = 1;
  } else if (percentage >= 70) {
    grade = 'C';
  } else if (percentage >= 50) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  return grade;
}

// DO NOT CHANGE THE CODE BELOW
console.log(`Grade(76): ${calculateGrade(76)}`);
console.log(`Grade(85): ${calculateGrade(85)}`);

class Tests {
  @Test()
  [`calculateGrade(76)`]() {
    expect(calculateGrade(76)).eq('C');
  }

  @Test()
  [`calculateGrade(85)`]() {
    expect(calculateGrade(85)).eq('B');
  }
}

// not important
export {};
