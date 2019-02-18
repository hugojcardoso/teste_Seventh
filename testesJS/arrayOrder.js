var people = [
    {name: 'Hugo', age: 38},
    {name: 'Jonas', age: 40},
    {name: 'Cardoso', age: 42},
    {name: 'Kesia', age: 35},
    {name: 'Charlotte', age: 4},
    {name: 'Grey', age: 4},
]
function comparePerson(a,b){
    if(a.age < b.age){
        return -1;
    }
    if(a.age > b.age){
        return 1
    }
    
    return 0;
}
console.log(people.sort(comparePerson));