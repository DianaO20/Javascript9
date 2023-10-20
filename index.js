
(function (arg) {
    console.log(arg)
}('Here is a text'))

 const counter  = (function(){
    let count=0;
    return function(){
        return count++
    }
 }()
 )    
 console.log(counter())
 console.log(counter())
 console.log(counter())



const closure = () =>{
    let x = 5;

function displayX (){
    return x
}

function addOne(){
    x++
}
function multipleTwo(){
    x = x*2
}
function minusOne(){
    x--
}
function changeX(arg){
    x=arg
}
return[displayX, addOne, multipleTwo, minusOne, changeX]
}

const [displayX, addOne, multipleTwo, minusOne, changeX] = closure()
console.log(displayX())
addOne()
console.log(displayX())
multipleTwo()
console.log(displayX())
minusOne()
console.log(displayX())
changeX(67)
console.log(displayX())