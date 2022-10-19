const test = ( ...args)=> {
    console.log(args)
}
test(1,2,3,4,5,[])

//destructuring
{
let [name, age] = ['Jai', 24]
console.log(name, age)
}

{
let { name, age} = {name:'Jai', age: 24}
console.log(name, age)
}