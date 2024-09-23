//map
const numbers =[1,2,3,4];
const triple = numbers.map(num => num*3);
console.log(triple);
console.log('\n');

//filter
const evenNumbers = numbers.filter(num => num % 2 == 0);
console.log(evenNumbers);
console.log('\n');

//forEach
numbers.forEach(num => console.log(num*2));
console.log('\n');

//indexOf
const index = numbers.indexOf(3);
console.log(index);
console.log('\n');

//includes
const has4 =numbers.includes(4);
console.log(has4);
console.log('\n');

//every
const allEven = numbers.every(num => num % 2 == 0);
console.log(allEven);
console.log('\n');

//some
const hasOdd = numbers.some(num => num % 2 !== 0);
console.log(hasOdd);

