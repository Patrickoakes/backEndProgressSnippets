 //pass by value
function change(b) {
	b = 2;
}

// var a = {}; passes function powers but renders value irrelevant.  
change(a);
console.log(a);  // === 1   so b is DEAD thus the dead coloring on b.

// pass by reference
function changeObj(d) {
	d.prop1 = function() {};
	d.prop2 = {};
}

var c = {};    // 
c.prop1 = {};  //INSIGNIFICANT IT DOESN'T MATTER WHAT IS IN FUNCTION WE JUST PASS POWERS TO C
changeObj(c);
console.log(c);  //  { prop1: [Function], prop2: {} }   BUT INTERESTINGLY THE VALUE IS IRRELEVANT, BUT NOT THE prop1 and prop2 they can be used later

//  d  AND c are still alive and well!!