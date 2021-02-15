const student = [
    {id:21, name: 'omar sani'},
    {id:31, name: 'mannaa'},
    {id:41, name: 'dipjol'},
    {id:51, name: 'sakib'},
];

// pro level
let newArray = student.map(x => x.name)
let id = student.map(id=>id.id)
let big = student.filter(s => s.id>40)
let bigger = student.find(s => s.id>40)
console.log(newArray,id, big);
console.log(bigger);

/*as usual
for (let i = 0; i < student.length; i++) {
    const element = student[i];
    newArray.push(element.name);
}
console.log(newArray);
*/