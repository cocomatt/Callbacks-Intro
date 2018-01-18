names = ["Alice", "Bob", "Waldo", "Winston"];

// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  names.forEach(function(name, i) {
    if (name === "Waldo") {
      found(i);   // execute callback
    }
  });
};

//this  is the callback function
function actionWhenFound(i) {
  console.log("Found Waldo at index " + i + "!");
}

findWaldo(names, actionWhenFound);


