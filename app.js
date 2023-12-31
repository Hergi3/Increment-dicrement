
let numberbox = document.querySelector("#numberbox");
const my_minus = document.querySelector("#minus");
const my_reset = document.querySelector("#reset");
const my_plus = document.querySelector("#mplus");

numberbox.value = 0;
let my_number = 0;


plus.addEventListener("click", function(){
    let number = numberbox.value;
    my_number = number; 
    my_number++;
    numberbox.value = my_number;

})

minus.addEventListener("click", function(){
    let number = numberbox.value;
    my_number = number; 
    my_number--;
    numberbox.value = my_number;

})

reset.addEventListener("click", function(){

        numberbox.value = 0;

})
