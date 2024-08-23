let sum: number = 0

for (let i = 1; i <= 365; i++) {
    sum = sum + i
}
console.log('Totol: ', sum)


let sum: number = 0

for (let i = 1; i <= 365; i++) {
    sum = sum + i
}
console.log('Totol: ', sum)


let sum: number = 1
let i: number = 1

while (i <= 31) {
    sum = sum + i
    i++
}
console.log('Totol: ', sum)


let sum: number = 0
let i: number = 1

do {
 sum = sum + i
 i++
} while (i <= 31)
console.log('Totol: ', sum)


let count: number = 0

while (true) {
    console.log("โสดโว้ยย")
    count++
    if (count === 10) {
        break
    }
}


for  (let i = 1; i <= 20; i++) {
    console.log('ฉันอายุ ' + i + ' ปี' )
}


const cars: string[] = ['Toyota', 'Honda', 'Suzuki', 'Yamaha', 'Mazda']
 
for (let i = 0; i < cars.length; i++) {
    console.log(cars[1])
}


const cars: string[] = ['Toyota', 'Honda', 'Suzuki', 'Yamaha', 'Mazda']
 
for (let i = 0; i < cars.length; i++) {
    if (cars[i] === 'Yamaha' ) {
        console.log('รถซื้อแกง มันจะแรงได้ยังไง')
    }
}


const friend: string[] = ['Plam', 'Tar', 'Kanok', 'Var', 'Art' ]

for  (let i = 0; i < friend.length; i++) {
    if (friend[i] === 'Art' ) {
        console.log('ไปกินหมูกระทะกัน')
    }
}


const no: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

for  (let i = 0; i < no.length; i++) {
    if (no[i] === 3||no[i] === 5||no[i] === 7 ) {
        no[i] = 0
    }
}

console.log(no)