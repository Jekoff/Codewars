

/* Task
Complete the function howManydays. It accepts 1 parameter month, 
which means the month of the year. Different months have a different
number of days as shown in the table below. Return the number of days
that are in month. There is no need for input validation: month will 
always be greater than 0 and less than or equal to 12. */

// My solution:

function howManydays(month){
    switch (month){
        case 2:
        return 28;
        case 4:
        case 6:
        case 9:
        case 11:
        return 30;
}
return 31;
}

// Other Solutions:

function howManydays(month){
    switch ( month ){
      case 2 : return 28
      case 4: case 6: case 9: case 11: return 30
      default: return 31
    }
  }

  // another solution:

  const days = ['',31,28,31,30,31,30,31,31,30,31,30,31];
  const howManydays = n => {
     switch(n) {
        case n : return days[n];
     }
  }
   
