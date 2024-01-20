/*

Implement a function which accepts 2 arguments: string and separator.

The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

For example:

splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"

*/ 

// My Solution:
function splitAndMerge(str,sp){
    return str.split(' ').map(word => word.split('').join(sp)).join(' ');
}

// Other Solutions:
var str='My name is John';
var sp='';
var arr=str.split('');
var arr2=[];
for (var i=0;i<arr.lenght;i++){
    if (arr[i]!==''){
        arr2.push(arr[i]);
    }
<<<<<<< HEAD
}
=======
}

var str='My name is John';
var words = str.split('');
console.log(words);
// output:
['My', 'name', 'is', 'John']

>>>>>>> 0b3378420620bf8c3a05348002b921c6ab5fd691
