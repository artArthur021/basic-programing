const score = [10, 23, 26, 30, 33] 

let sum: number = 0

for (let i = 0; i < score.length; i++) {
    sum = sum + score[i]
}

let avg = sum / score.length

console.log("Total: ", sum)
console.log("avg: ", avg)


const myStudents: string = "A,B,C,D,E,F"

const myStudentsArray: string[] = myStudents.split(',')

console.log(myStudents)

console.log(myStudentsArray[0])


const animals: string = "แมว*งู*ปลา*หมี"

const animalsArray: string[] = animals.split('*')

console.log(animals)
console.log(animalsArray)


const animals: string = "แมว*งู*ปลา*หมี"
const animalsArray: string[] = animals.split('*')

console.log("ตั้งต้น: ", animalsArray)

animalsArray.pop() //เอาตัวสุดท้ายออก

console.log("เอาตัวสุดท้ายออก: ",animalsArray)

animalsArray.push('จรเข้') //ใส่ต่อท้าย

console.log("ใส่ต่อท้าย: ", animalsArray)

animalsArray.shift() //เอาข้างหน้าออก

console.log("เอาตัวหน้าออก: ", animalsArray)

animalsArray.unshift('แมงมุม') //ใส่ตัวหน้า

console.log("ใส่ตัวหน้า: ", animalsArray)
 

const friends: string = "ปาม,ต้า,พี่,อาท"
const friendsArray: string[] = friends.split(',')

console.log(friendsArray)

friendsArray.sort()

console.log(friendsArray)

friendsArray.reverse()

console.log(friendsArray)


const me = {
    firstName: 'Patcharapol',
    lastName: 'Sangwanna',
    age: 19
}

//ประวัติส่วนตัว

//ชื่อ: Patcharapol
//นามสกุล: Sangwanna
//อายุ: 19