$(document).ready(function(){


var ourArray = [
 'banana',
 873,
 'grapefruit',
 'penguin',
];

console.log(ourArray);

$('body').append('<h1>Our array: ' + ourArray + '</h1>');

var item = ourArray[2];
console.log(item);

var length = ourArray.length;
console.log(length);

console.log(Math.random());

var rand = ourArray[Math.floor(Math.random() * ourArray.length)];
console.log('rand: ' + rand);

  // shuffle our array
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  shuffle(ourArray);

  console.log('shuffle: ' + ourArray);

  var myList = ourArray.slice(0,40);
  console.log('first two: ' + myList);

  $('body').append('<p>' + myList + ',<br> </p>');












});
