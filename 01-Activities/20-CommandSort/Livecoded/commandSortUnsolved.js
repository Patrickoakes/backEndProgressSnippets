// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================
var [node, file, ...nums] = process.argv;
console.log(nums);
// var numsAsNumbers = [];
// for (let i = 0; i < nums.length; i++) {
//   numsAsNumbers[i] = parseFloat(nums[i]);
// }
var string1 = 'This';
var string2 = 'is';
var string3 = 'a';
var string4 = 'string!';
var longConcattedString = string1 + ' ' + string2 + ' ' + string3 + ' ' + string4 + ' ' + (1 + 1);
var yay = `${string1} ${string2} ${string3} ${string4} ${1 + 1}`;
console.log(yay);
var errors = [];
var numsAsNumbers = nums
// .filter(function(val){
//   return !isNaN(parseFloat(val));
// })
.map(function(val) {
  if (isNaN(parseFloat(val))) {
    errors.push(val);
  }
  return parseFloat(val);
})
.sort(function(a, b){
  return a - b;
});

if (errors.length > 0) {
  throw new Error(
  `The following inputs are not numbers!
${errors.join('\n')}`
  );
}

console.log(numsAsNumbers);