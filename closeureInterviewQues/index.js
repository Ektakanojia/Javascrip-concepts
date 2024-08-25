// function x(){
//     var i = 0;
//     setTimeout(function(){console.log(i)},1000)
// }
// x();
// function x(){
//     for(var i=0;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);    
//     }
// }
// x();
// function x(){
//     for(let i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);    
//     }
// }
// x();

function x(){ 
    for(var i=1;i<=5;i++){ 
       function closure(i)
       {
        setTimeout(function(){
            console.log(i)
        },i*1000);
       }
       closure(i);
    }
    console.log("Namaste javascript")
}
x();