// setting the initial start
let count = 0;
// setting the buttons
const value =document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
// here i am basically collecting buttons class and increasing or decreasing it on click
btns.forEach(function(btn){
  btn.addEventListener("click", function(e){
    const styles = e.currentTarget.classList;
    if (styles.contains("Decrease")){
      count--;
    }
    else if(styles.contains("Increase")){
      count++;
    }
    else{
      count = 0;
    }
    // change the color if negative or positive
    if (count>0){
      value.style.color = "green"
    }
    if (count<0){
      value.style.color = "red"
    }
    if (count===0){
      value.style.color = "#222"
    }
    value.textContent = count;
  });
});