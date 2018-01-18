names = ["Alice", "Bob", "Waldo", "Winston"];

// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

//this  is the callback function
function actionWhenFound(i) {
  console.log("Found Waldo at index " + i + "!");
}

findWaldo(names, actionWhenFound);
