let names = {
    firstName:"Ekta",
    lastName:"Kanojia",
    //instead of passing this method into the object ,we need to create the ,individula method  
    // printFullName :function() {
    //     console.log(this.firstName + " "+ this.lastName )
    // }
}

printFullName =function(city,state) {
    console.log(this.firstName + " "+ this.lastName +" "+"from" +" "+ city+" ,"+state)
}

//how  to invoke the printfull name method
//names.printFullName();

let names2 = {
    firstName:"Shefali",
    lastName:"Kanojia",
}
//function borrowing
printFullName.call(names2,"Lucknow","UP")
//printFullName.call(names,"Grugram","Haryana")

//apply method only differnce is way we pass the we pass argument inside the array
printFullName.apply(names,["Pune","Maharasta"])

//bind it is the same as call method , but instead of call the printFullName directly it,it will bind the printfullname to the object (names) and return  the copy of that method
let printMyName = printFullName.bind(names,"Lucknow","UP")
printMyName()