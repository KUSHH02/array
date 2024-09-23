//for loop
const array =[1,2,3,4,5];
for(let i=0;i<=array.length; i++)
{
   console.log(array[i]);
}
console.log('\n');

//for of loop
const array1 =[10,20,30];
for(const value of array1)
{
    console.log(value);
}
console.log('\n');

//for each loop
const array2 =[2,4,6,8,10];
array2.forEach(array2=>{
    console.log(array2);
});
console.log('\n');

//map method
const array3 =[10,20,30,40,50];
const doubled=array3.map(value => value*2);
console.log(doubled);
console.log('\n');

//for in loop
const array4 =[1,3,5];
for(const index in array4)
{
    console.log(array4[index])
}
console.log('\n');

//Array Methods
const fruits=['apple','orange','blueberry'];

//push
fruits.push('kiwi','mango');
console.log(fruits);
console.log('\n');

//pop
const lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);
console.log('\n');

//shift
const firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits);
console.log('\n');

//unshift
fruits.unshift('Strawberry','Grapes');
console.log(fruits);
console.log('\n');

//splice
//remove elements from index
const removed=fruits.splice(1,2);
console.log(removed);
console.log(fruits);
//add elements from index
fruits.splice(3,0,'pineapple','watermelon');
console.log(fruits);