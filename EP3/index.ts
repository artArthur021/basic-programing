function grade(homework: number, midturm: number, final: number) {
    let score: number= homework+midturm+final
    
    if (score < 50 ) {
        return 'F'
     }else if (score<60) {
        return 'D'
     }else if (score<70) {
        return 'C'
     }else if (score<80) {
        return 'B'
     }else return 'A'
    }

    console.log(grade(20,20,60)) // มีinput มีoutput


function helloWorld() {
    console.log("สวัสดี")
}
 helloWorld() //ไม่มี input ไม่มี output

 function helloName(name: string) {
    console.log(name)
 }

 console.log(helloName('MAX'))

 helloName('MAX') // input ไม่มี output

function getPi() {
    return 3.14
}

console.log(getPi())


function st(fname: string, sname: string) {

    if (fname === 'mix' && sname === 'zane') {
        console.log('เริ่มสอน')
    } else {
        console.log('ไม่สอน')
    }
}

st('mix', 'zane')

function st(aname: string, bname: string, cname: string) {

    if (aname === 'mix' && bname ==='zane' || cname ==='forth') {
        console.log("พร้อมเรียน")
    } else {
        console.log("ยังไม่พร้อมสอน")
    }
}

st('mix', 'zane', 'forth')

function st(sex: string, height: number, weight: number) {

    if (sex === 'ชาย' && (height > 170 || weight > 50 && weight <= 110)) {
        console.log("จับใบดำใบแดง")
    } else {
        console.log("ไม่เข้าเกณฑ์")
    }   
} 

st('ชาย', 185, 80 )


function st(ages: number, salary: number, deposit: number) {

    if (ages > 16 && salary < 70000 || deposit < 500000) {
        console.log("รับ 10000")
    } else {
        console.log("อด.....")
    }
}

st(19, 5000, 0)