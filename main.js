

/// select button for show up answer ///
let answer = document.getElementById("answer2")
/// select the button of number and operater beside equal ///
let button = document.querySelectorAll(".button")
/// select eqaul button to do the math calulation ///
let equal = document.querySelector(".equal")
/// select C button to do clear value ///
let empty = document.getElementById("key")

// set up string for storage the button value, so they get call in other function //
let result = ""

empty.addEventListener("click", function(){
    let zero = " "
    answer.innerHTML = zero;

})


///////// create the loop to let them get in result string, then do the math//////////
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function(){
  result += this.value
  answer.innerHTML = result;
});
}

//// when the equal button click, do th math use eval function ///
equal.addEventListener("click",function(){
    let sum = eval(result)
    answer.innerHTML = sum;
    console.log(sum)
    result = ""
})

////////after get the result, press "c" button to clear the textbox ///////
empty.addEventListener("click", function(){
    result = ""
    answer.innerHTML = result
    console.log("click")

})


//// limited /////
