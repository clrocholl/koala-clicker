let clickable = document.querySelector("img.clickable")

clickable.addEventListener("click", clickCounter)

let counter = 0;
console.log("counter: ", counter);

function clickCounter(){
  counter++
  console.log("counter ", counter);
  let container = document.querySelector("p#clickCount")
  container.innerHTML = counter
}
