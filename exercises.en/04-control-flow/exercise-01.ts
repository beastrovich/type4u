// DO NOT CHANGE IMPORTS
import { expect } from 'chai';

function outputDay(activity: Day) {
  switch (activity) {
    case 'Monday':
      return 1;
    case 'Tuesday':
      return 'Today is Tuesday';
    case 'Wednesday':
      return 'Today is Wednesday';
    case 'Thursday':
      return 'Today is Thursday';
    case 'Friday':
      return 'Today is Friday';
    case 'Saturday':
      return 'Today is Saturday';
    case 'Sunday':
      return 'Today is Sunday';
  }
}

// DO NOT CHANGE THE CODE BELOW
type Day =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

console.log(outputDay('Monday')); // should output "Today is Monday"

class Tests {
  @Test()
  [`outputDay('Monday')`]() {
    expect(outputDay('Monday')).eq('Today is Monday');
  }
}

// not important
export {};
