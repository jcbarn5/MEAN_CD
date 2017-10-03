function zero_negativity(arr) {
  var flag = true;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] < 0){
      flag = false;
      break;
    }
  }
  return flag;
};

function is_even(num) {
  if(num % 2 == 0){
    return true;
  }
  else {
    return false;
  }
};

function how_many_even(arr){
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if(is_even(arr[i])){
      count++;
    }
  }
  return count;
};

function create_dummy_array(n) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random(0,9)*10);
  }
  return arr;
};

// create_dummy_array(4);

function random_choice(arr) {
  var result = arr[Math.floor(Math.random(0, arr.length)*10)];
  console.log(result);
  return result;
};

// random_choice([23,65,37,89,51]);




















// end
