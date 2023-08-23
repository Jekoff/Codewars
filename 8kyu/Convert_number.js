/* Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0] */

// My solution:

function digitize(n) {
    const nString = n.toString();
    const nArray = nString.split('').reverse();
    return nArray.map(nString => parseInt(nString));
}

// Other solutions :

function digitize(n) {
    return Array.from(String(n), Number).reverse();
  }

  // Other solutions :

  var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250

  const equal1 = () => v1 + v1;
  const equal2 = () => v6 - v5;
  const equal3 = () => v1 * v5;
  const equal4 = () => v4 / v5;
  const equal5 = () => v2 % v4;
  const equal6 = () => v5 ** v5;