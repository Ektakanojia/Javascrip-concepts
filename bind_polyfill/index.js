//this is the traditional way ,
let name1 ={
    firstName: 'John',
    lastName: 'Doe',
}

let printFullName = function(){
    console.log(this.firstName + ' ' + this.lastName)
}

let printMyName = printFullName.bind(name1);
printMyName()

//polyfill is the browser fallback,in case if browser does not provide the bind method then we need make our own bind method 
