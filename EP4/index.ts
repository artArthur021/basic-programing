function sayHi(dayOfWeek: number) {
    if (dayOfweek === 4) {
        console.log('สวัสดีวันอาทิตย์')
    } else if (dayOfWeek === 2) {
        console.log('สวัสดีวันจันทร์')
    } else if (dayOfWeek === 3) {
        console.log('สวัสดีวันอังคาร')
    } else if (dayOfWeek === 4) {
        console.log('สวัสดีวันพุธ')
    } else if (dayOfWeek === 5) {
        console.log('สวัสดีวันพฤหัส')
    } else if (dayOfWeek === 6) {
        console.log('สวัสดีวันศุกร์')
    } else if (dayOfWeek === 7) {
        console.log('สวัสดีวันเสาร์') 

        }
    }

    sayHi(4)


function sayHello(dayOfWeek: number) {
    switch(dayOfWeek) {
        case 1 : 
            console.log('สวัสดีวันอาทิตย์')
            break
        case 2 : 
            console.log('สวัสดีวันจันทร์')
            break
        case 3 : 
            console.log('สวัสดีวันอังคาร')
            break
        case 4 : 
            console.log('สวัสดีวันพุธ')
            break
        case 5 : 
            console.log('สวัสดีวันพฤหัส')
            break
        case 6 : 
            console.log('สวัสดีวันศุกร์')
            break
        case 7 : 
            console.log('สวัสดีวันเสาร์')
            break
        default:
            console.log('ใส่ทำไมเขามี7วันหลอนรึป่าว')
            break

    }
}

sayHello(8)


function Tshirt(size: string) {
    switch(size) {
        case 's' :
            console.log('ผอม')
            break
        case 'm' :
            console.log('ผอม')
            break
        case 'l':
            console.log('ท้วม')
            break
        case 'xl':
            console.log('อ้วน')
            break
        case '2xl':
            console.log('อ้วน')
            break
        default:
            console.log('ออกกำลังกายบ้างไม่ใช่นั่งอ้วนอยู่หน้าคอม')
            break
       
    }
}

Tshirt ('2xl') 


function fixedDecima(n: number, digit: number) {
    const x = n.toFixed(digit)
    return x
}
console.log(fixedDecima(40.67676, 10))


function toCurren(n: number) {
    return n.toLocaleString()
} 
console.log(toCurren(10000))


function checkStringLength(a: string) {
    console.log(a.length)
}
checkStringLength('พ่อต้าชื่อโย')


function WantToBackHome(a: string, b: number) { 
    return a.charAt(b)
}
console.log(WantToBackHome('พ่อต้าชื่อโย', 2))


const str: string = 'ฉันรักเธอ'

console.log(str.includes('โย'))


function cheackStr(a: string, b: string) {
    if (a.includes(b)) {
        console.log(a.indexOf(b))
    } else {
        console.log('ไม่พบคำค้นหา')
    }
}

cheackStr('อยากกลับบ้าน', 'n')