const aboutMe = {
    firstName: 'art',
    lastName: 'artist',
    age: '100000',
    mail: 'xxxxxxx@mail.com',
    phone: '090xxxxxx0',
    idCard: 'xx345xxxxxxx',
    fan: {
        firstName: 'Lisa',
        lastName: 'Mamamoosub',
        age: 15,
        animal: {
            animalType: 'cat',
            color: 'orage'
        }
    },
    myBro: {
        firstName: 'Lisa',
        lastName: 'Mamamoosub',
        AKA: 'SuperMan',
    }
}

console.log(aboutMe.myBro.AKA)
////////////////////////////////////////////////////////////////

const myFriends = [{
    firstName: 'Lisa',
    lastName: 'Mamamoosub',
    AKA: 'Superwomen',
    age: 19
}, {
    firstName: 'Rosse',
    lastName: 'Mamamoosub',
    AKA: 'RoseOnpink',
    age: 20
}, {
    firstName: 'Jisoo',
    lastName: 'Mamamoosub',
    AKA: 'Jinny',
    age: 21
}, {
    firstName: 'Jenny',
    lastName: 'Mamamoosub',
    AKA: 'WonderG',
    age: 22
}]

const myFriendsAKA = myFriends.map(function(element, index) {
    return ({
        fn: element.firstName,
        chaya: element.AKA

    })

})

const myFriendsMoreThan = myFriends.filter(function(element, index) {
    return element.age > 19 && element.lastName == 'Mamamoosub'
})  

console.log(myFriendsMoreThan) 


