let name1 ={
    firstname:"ekta",
    lastname:"kanojia"
}

let printName= function(hometown,city){
    console.log(this.firstname+" "+this.lastname+" from "+ hometown +","+city)
}
let printMyName =printName.bind(name1,"UP","Lucknow");
printMyName();


let printName2 = function(hometown){
console.log(this.firstname+" "+this.lastname +" from "+" "+hometown)
}
Function.prototype.mybind= function(...args){
let obj= this
let params= args.slice(1);
return function(...args2){
obj.call(args[0],[...params,...args2])
}
}
let printMyName2 = printName2.mybind(name1,"UttarPardesh")
printMyName2("India");