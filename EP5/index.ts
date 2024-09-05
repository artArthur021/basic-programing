// ท่านพชรพล สังข์วรรณะ
const prefix: string = 'พณ.ท่าน ร้อยตำรวจตรวจตลาด'
const fName: string = 'พชรพล'
const lName: string = 'คนหล่อ'

console.log(prefix.concat(" ", fName, lName)) // ต่อ string แบบ concat
console.log(prefix + " " + fName + " " + lName) // ต่อแบบ+ 


const str: string = 'นายพชรพล สังข์วรรณะ'
console.log(str.slice(str.indexOf('นายพชรพล'), str.indexOf('นายพชรพล') + "นายพชรพล".length))


const str: string = 'ยายแล่ม เมื่อตอนสาว ๆ ผิวขาว ตาคม ยายแล่ม'
console.log(str.replace('ยายแล่ม', 'โรนัลโด'))


function getPrefix(fName: string) {
    if (fName.includes('นาย')) {
        return 'นาย'
    } else if (fName.includes('นางสาว')) {
        return 'นางสาว'
    }
}

console.log(getPrefix('นายพชรพล สังข์วรรณะ'))

