let a = 5
console.log(typeof(a))

a = 6
console.log(a)

a = "abc"
console.log(a) // error / abc?
console.log(typeof(a))


let n1 = 7
let n2 = "asd"

let n3 = n1*n2
console.log(n3)

let per = (887 / 1000) * 100
console.log(per) // 77.7 => default point calculation perform

let intPer = parseInt(per)
console.log(intPer) // 77

let fltNum = document.getElementById("fltNum")
fltNum.innerHTML = `${per}`