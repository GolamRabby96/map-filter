/// map sob somoi array return kore ... 
const number = [3, 5, 6, 8, 4];
// pro level 01
const total = number.map(x=>x*x);
// console.log(total);


/*
// finally 02
const result = number.map(function(element){
    return element * element;
})
console.log(result);
*/

/* 03
function square(element){
    console.log(element * element);
}
number.map(square)

*/

/* as usual 04
const output = [];

for (let i = 0; i < number.length; i++) {
    const element = number[i];
    const result = element *  element;
    output.push(result);
}*/


// ... ... ... ... Filter ... ... ... ... ... ... ... 
const num = [3, 5, 6, 8, 4];
const big = num.filter(x => x > 5); // pro mood
// console.log(big);

const bb = num.find(x => x>5)
console.log(bb); // eta akta return kore.. 1 ta pele thame jai
