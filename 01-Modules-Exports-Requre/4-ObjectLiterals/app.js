// OBJECTS AND OBJECT LITERALS//

        // NAME/VALUE PAIR //////////////////////////////////////////////

        // Name that maps to value;
        // same NAME can be used in different ways, but one value

        // OBJECT = Collection of name/value pairs//////////////////////////////

        ////////OBJECT LITERAL/////////////////
        // NAME/VALUE PAIRS SEPARATED BY COMMAS 
        // AND SURROUNDED BY CURLY BRACES
        //ex

        /*     {
                 Street: 'Main',
                     Number: 100,
                         Apartment:
                 {
                     Floor: 3,
                         Number: 301
                 }
             } */
var person = {
	firstname: 'John',
	lastname: 'Doe',
	greet: function() {
		console.log('Hello, ' + this.firstname + ' ' + this.lastname);
	}
};

person.greet();

console.log(person['firstname']);