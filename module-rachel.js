
function myadd(a, b) { 
return a+b}
console.log (myadd(1,1))

function mult(a, b) { 
return a*b}
console.log (mult(2,3))

function sub(a, b) { 
return a-b}
console.log (sub(2,1))

function dev(a, b) { 
return a/b}
console.log (dev(3,3) )

module.exports = {
    add:myadd,
    multiply:mult,
    substract:sub,
    devide:dev,
}