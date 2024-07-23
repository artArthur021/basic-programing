function add (a: number, b: number ) {return a+b}
console.log(add(2,2))

function down(a: number, b: number ) {return a-b}
console.log(down(6,4))

function twin(a:number, b:number, c:number, d:number ) {return a*b*c*d}
console.log(twin(9, 7, 5, 3))


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
console.log(grade(20,20,60))
