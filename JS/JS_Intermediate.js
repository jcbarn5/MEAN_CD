function starString(n) {
  var stars = "";
  for (var i = 0; i < n; i++) {
    stars += "*";
  }
  console.log(stars);
  return stars;
};

// starString(6);

function drawStars(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].constructor === String) {
      let letter = "";
      for (var m = 0; m < arr[i].length; m++) {
        letter += arr[i][0];
      }
      console.log(letter.toLowerCase());
    }
    else {
      starString(arr[i]);
    };
  }
  return this;
};

// drawStars([1,8,9,2,7,4,6,5]);
// drawStars([1,"Jim",9,"Kenny",7,4,"Robert",5]);










































































// end
