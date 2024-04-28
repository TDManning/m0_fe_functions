// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

// The includes() method is called on the string "Hello World"
// includes() has one clear job which is to identify if a particular word (ie. "Hello") exists in the String
// The return value is "true"
"Hello World".includes("Hello");

// The .endsWith() method is called on the string "Hello World"
// endsWith() has one clear job which is to identify what a string ends with. In this case the word is "Hello"
// The return value is "false"
"Hello World".endsWith("Hello");

// The .endsWith() method is called on the string "Hello World"
// endsWith() has one clear job which is to identify what a string ends with. In this case the word letters "rld" are compared to the statement "Hello World"
// The return value is "true"
"Hello World".endsWith("rld");



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

// The endsWith() method is called on the exclamation variable, which stores the string object "Neptune's Beard!". 
// The endsWith() method returns true if the data in the exclamation variable ends with the argument passed in.
// In this example, the return value is true, because "Neptune's Beard!" does end with "!".
// The console.log() statements prints the return value of the endsWith() method (true) to the console.
var exclamation = "Neptune's Beard!"
console.log(exclamation.endsWith("!"));

// The includes() method is called on the exclamation2 variable, which stores the string object "Sweet Sassy Molassy!". 
// The includes() method returns true if the data in the exclamation2 variable includes the argument passed in.
// In this example, the return value is true, because "Sweet Sassy Molassy!" does include "Sassy".
// The console.log() statements prints the return value of the includes() method (true) to the console.
var exclamation2 = "Sweet Sassy Molassy!"
console.log(exclamation2.includes("Sassy"));


// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

// The .length() method is called on the flowers variable, which stores the string array listing four different flower species. 
// The .length() method returns the number of elements in the array.
// In this example, the return value is 4, because there are four elements in the list.
// The console.log() statement prints the return value of the length() (4) to the console.
var flowers = ["daisy", "tulip", "rose", "geranium"];
console.log(flowers.length);

// The reverse() method is called on the carnivalFoods variable, which stores the string object ""cotton candy", "popcorn", "deep fried oreos", "funnel cake". 
// The reverse() method returns data in the carnivalFoods variable switching elements the first [0] and third [3] index position.
// In this example, the return value is ['funnel cake', 'deep fried oreos', 'popcorn', 'cotton candy']
// The console.log() statements prints the return value of the reverse() method to the console.
var carnivalFoods = ["cotton candy", "popcorn", "deep fried oreos", "funnel cake"];
console.log(carnivalFoods.reverse([0, 3]));
