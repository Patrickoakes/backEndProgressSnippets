///////////////////// IIFE///////////////////////////////////
/* IMMEDIATELY INVOKED FUNCTION EXPRESSIONS

MODULES ARE PROTECTED PARTS OF JAVASCRIPT

SCOPE= WEHER IN CODE TO YOU HAVE ACCESS



/////// NORMAL FUNCTION STATEMENT WITH AN ANONYMOUS FUNCTION/// MOST BASIC NOT USABLE YET

//    function () {

//    }

//THIS IS A FUNCTION WRAPPED IN PARENTHESES////  MEANT TO BE AN EXPRESSION NOT JUST A FUNCTION STATEMENT
// IT IS NOW AVAILABLE TO BE USED RIGHT AWAY//   FUNCTION EXPRESSION
// the one below is an IFFE because now it can be used immediately.
//      (function () {

//       }());   

*/
    //FIRST ITERATION   GIVES US  JOHN and JANE

	//          (function (lastname) {
//          
//          
//          	var firstname = 'John';
//          	console.log(firstname);   JOHN
//          	//console.log(lastname);
//          	
//          }());
//          
//          var firstname = 'Jane';
//          console.log(firstname);      JANE 
			
		// SECOND ITERATION  GIVES US SAME BECAUSE OF SCOPE // FUNCTIONS PROTECTION // 
		
	//	 // Variable goes from bottom to top
	//		(function (lastname) {
	//		
	//		var firstname = 'John';   JOHN
    //      	console.log(firstname);
    //      	//console.log(lastname);
    //      	
    //      }());
          
		//          console.log(firstname);   JANE     
					
		// FINAL ITERATION 
		
		var firstname = 'Jane'; 
		
		(function (lastname) {
		
			var firstname = 'John';
		   console.log(firstname);   //JOHN
		   console.log(lastname);    //DOE
		   
	   }('Doe'));
	   
	   console.log(firstname);	    // JANE

	   // FUNCTION AND MODULES ACT IN MUCH THE SAME WAY THAT IS WHY IT IS GOOD FOR NODE.JS