const person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 60,
    job: 'CEO',
    fullName: function() {
        return person.firstName + " " + person.lastName 
    }
}

console.log(person.firstName + " " + person.lastName)

const boyFirend = {
    firstName: 'Tim',
    lastName: 'Tony',
    age: 60,
    job: 'CEO',
    fullName: function() {
        return boyFirend.firstName + " " + boyFirend.lastName 
    }
}

console.log(boyFirend.firstName + " " + boyFirend.lastName)

//  function A(){
    // console.log(person.firstName + " " + person.lastName)
// }

//  function B(){
    // console.log(boyFirend.firstName + " " + boyFirend.lastName)
// }
