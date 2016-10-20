// document.getElementById('output').innerHTML += ('starting...');
//
// //wait half a second before firing writeEnding()
//
// var myTimer = window.setTimeout(writeEnding, 500);
// document.getElementById(output).innerHTML += ('continuing...');
//
// function writeEnding(){
//   document.getElementById('output').innerHTML += ('ending!');
// }
//
//
// Call our main function. Pass it a URI and a callback function

//SOURCE: http://jsfiddle.net/cwbuecheler/Y9Ca8/

getData('http://fakedomain1234.com/userlist', writeData);

// Write some stuff to the p tag
document.getElementById('output').innerHTML += 'show this before data ...';

// Define our main function
function getData(dataURI, callback) {

    // Normally you would actually connect to a server here.
    // We're just going to simulate a 3-second delay.
  var timer = setTimeout(function () {

    	// Here's some data which we're pretending came from dataURI
    var dataArray = [123, 456, 789, 012, 345, 678];

    	// run our callback function
    callback(dataArray);

  }, 3000);
}

function writeData(myData) {
  document.getElementById('output').innerHTML += myData;
}
