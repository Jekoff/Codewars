/* Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20 */


// My solution:

function century(year) {
    return Math.ceil(year / 100);
}

// Other solutions:

function century(year) {
  var century = 0;
  
  for(var i = 0; i < year; i++) {
    if(i % 100 == 0) {
      century++;
    }
  }
  return century;
}

// Another solution:

const century = year => year % 100 === 0 ? parseInt(year / 100) : parseInt(year / 100) + 1;