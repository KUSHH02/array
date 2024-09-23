let now = new Date();
console.log(now);
console.log('\n');

let year = now.getFullYear();
console.log(year);
console.log('\n');

let month = now.getMonth();
console.log(month);
console.log('\n');

let day = now.getDate();
console.log(day);
console.log('\n');

function addDays(date, days) 
{
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
let newDate = addDays(now,10);
console.log(newDate);
console.log('\n');

function dateDiffInDays(date1, date2) {
    const diffTime = Math.abs(date2 - date1);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
   }
let diffDays = dateDiffInDays(now, newDate); 
console.log(diffDays);