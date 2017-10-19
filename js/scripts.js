$(document).ready(function() {
  var murray = 0;
  var bridges = 0;
  var daniels = 0;
  var quaid = 0;
  var reilly = 0;

  $("form#food1").submit(function(event) {
    var food = $("select#food").val();

    console.log(food);
    if (food === 'murray') {
      murray += 1;
    } else if (food === 'bridges') {
      bridges += 1;
    } else if (food === 'daniels') {
      daniels += 1;
    } else if (food === 'quaid') {
      quaid += 1;
    } else if (food === 'reilly') {
      reilly += 1;
    }

    event.preventDefault();
  });

  $("form#evening").submit(function(event) {
    var evening = $("select#evening").val();

    if (food === 'quaid') {
      quaid += 1;
    } else if (food === 'reilly') {
      reilly += 1;
    } else if (food === 'daniels') {
      daniels += 1;
    } else if (food === 'murray') {
      murray += 1;
    } else if (food === 'bridges') {
      bridges += 1;
    }

    event.preventDefault();
  });
});

//
// todo:
// 1. take in user input
// 2. display that
//
// todo:
// 1. take in user input
// 2. add values
// 3.
// 10. display results




//Each question answer is worth one point toward one celeb result
//To reach a celeb result the user must produce at least 3 points in value to a celeb
//
