const cart= ["kurta","Pant","Jeans"];
let balance=20000;
//create order
//proceed to payment 
//show order summary
//update wallet

//calling the promises 
const promise = createOrder(cart);

console.log(promise);
//attaching the promise object to the callback function 
promise.then(function (orderId){
    console.log(orderId)
    return proceedToPayment(orderId)
}).then(function(paymentInfo){
    console.log(paymentInfo)
    return showOrderSummary(paymentInfo)
}).then(function(balance){
    console.log(balance);
   return updatedWallet(balance);
}).then(function(resBalance){
    console.log(resBalance.balance)
})
.catch(function(err){
return err.message;
});

//creating a promise ,for creating the promises  we need new keyword and Promise constructor which takes function as parameter and that function will take 2 thing one is resolved and other one is reject 
//resolve will return the success of promise and reject will return the failure 
function createOrder(cart){
const pr = new Promise(function(resolve, reject){
   if(!validateCart){
    const err= new Error("cart is not valid");
    return err;
   }
   const orderId ="12345";
   if(orderId){
     resolve(orderId);
   }
})
return pr;
}
function proceedToPayment(orderId){
    const pr = new Promise(function(resolve, reject){
      if(orderId){
         resolve({paymentStatus:"success",message:`Thank you for payment` });
      }else{
        reject("payment failed")
      }
    });
    return pr;
}
function showOrderSummary(paymentInfo){
    const pr = new Promise(function(resolve, reject){
        if(paymentInfo.paymentStatus){
             resolve({status:"success",order:"cart" })
        }else{
            reject("Please buy some item")
        }
    });
    return pr;
}

function updatedWallet(history){
    const pr = new Promise(function(resolve, reject){
       if(history){
        if(history.status== "success"){
            let amount = 5000;
            balance=balance-amount;
             resolve({balance:balance, message:'total balance left'})
        }
    }else{
        reject("wallet has not updated ")
       }
     
    })
    return pr;
}

function validateCart(){
    return true;
}