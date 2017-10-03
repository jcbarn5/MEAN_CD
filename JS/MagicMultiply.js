function magic_multiply(x, y) {
  if(y.constructor === String){
    return "Error: Can not multiply by string";
  };
  if (x.constructor === String) {
    let newString = "";
    for (let i = 0; i<y; i++) {
      newString += x;
    }
    return newString;
  };

  if(x.constructor === Array){
    var result = [];
    for (var i = 0; i < x.length; i++) {
      result[i] = x[i]*y;
    }

    return result;
  }
  else{
    let result = x*y
    return result;
  }
}

// let test1 = magic_multiply(5, 2);
// console.log(test1);
//
// let test2 = magic_multiply(0, 0);
// console.log(test2);
//
// let test3 = magic_multiply([1, 2, 3], 2);
// console.log(test3);

// let test4 = magic_multiply(7, "three");
// console.log(test4);

const test5 = magic_multiply("Brendo", 4);
console.log(test5);
