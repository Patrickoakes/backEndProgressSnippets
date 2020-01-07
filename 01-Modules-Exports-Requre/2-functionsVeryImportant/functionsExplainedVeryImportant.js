//FIRST CLASS FUNCTIONS//////////////////////////////////////
        //EVERYTHING YOU CAN DO WITH OTHER TYPES YOU CAN DO WITH FUNCTIONS///

        //FUNCTION EXPRESSION/////////////////////////////////////////////
        //var a = 1  is an expression

        //FUNCTION EXPRESSION ARE FIRST CLASS//

        // INVOKE://////////////////////////////////////////////////////////////////////////////
        // RUN THE FUNCTION OR CALL//


// function statement
function greet() {
	console.log('hi');
}
greet();

 // functions are first-class
 function logGreeting(fn) {
 	fn();
 }
 logGreeting(greet);
 
 // function expression
 var greetMe = function() {
 	console.log('Hi Tony!');
 }
 greetMe();
 
 // it's first-class
 logGreeting(greetMe);
 
 // use a function expression to create a function on the fly
 logGreeting(function() {
 	console.log('Hello Tony!');
 });