// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Store the return value of the function call in a variable, and use console.log() to see the return value in the console.
// If a function takes parameters, call the function at least twice, passing different arguments each time.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting () {
    return "Fancy seeing you here!"
}
console.log(greeting())

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
    return `Top of the mornin' to ya, ${name}!`;
}
console.log(customGreeting("Mod0 Instructor"));

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function fullName(first, middle, last) {
    return (`${first}` + " " + `${middle}` + " " + `${last}`);
}
console.log(fullName("Tina", "Stamatina", "Fey"))

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.

function squared(num) {
    return num * num;
  }
  console.log(squared(4)); 

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

//Hi! I have some ideas about how to approach this but cant get anything but errors when I'm trying out things. 
//I'm wondering if I'm overthinking things and there is a strategy that I haven't considered. 
//My attempt below wont produce anything but errors at this point but I'm dying to know what the answer is. 

/*
function checkStock (num, food) 

{ if (num >= 4 && food === "Coffee"){
    console.log('Coffee is stocked');
    
} else if {(num <= 3 && food === "Tortillas")
      console.log('Tortillas - running LOW');

} else if {(num = 0 && food === "Cheese")
      console.log('Cheese - OUT of stock!')

} else {(num <= 1 && food === "Salsa")
      console.log('Salsa - running LOW')
}
*/

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"