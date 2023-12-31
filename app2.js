let displayArea = document.querySelector("#displayArea");
// let inputBox = document.querySelector("inputBox");
let myBtn = document.querySelector("#myBtn");

myBtn.addEventListener("click", function () {

   let a = 3;
   let b = 5;
   let c = a ** b; 
   let x = 2;
   x*= a;
   displayArea.innerHTML = x;
    
})