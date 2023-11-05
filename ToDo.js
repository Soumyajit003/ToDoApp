const submit = document.querySelector("#submit");
const container = document.querySelector(".container");
const inp = document.querySelector("#inp");

const arr = [];

submit.addEventListener("click", taskAdd);
inp.addEventListener("keypress", (enter) => {
  if (enter.key === "Enter") {
    taskAdd();
  }
});

function taskAdd() {
  const done = document.createElement("button");
  done.innerHTML = "";
  done.classList = "done btn";
  const cross = document.createElement("button");
  cross.innerHTML = "&cross;";
  cross.classList = "cross btn";
  const span = document.createElement("span");
  span.classList = "span";
  span.style = "cursor:pointer;";
  const task = document.createElement("div");
  task.classList = "task";

  if (document.querySelector("#inp").value != "") {
    task.append(done, span, cross);

    span.innerText = document.querySelector("#inp").value;
    arr.push(inp.value);
    console.log(arr);
    document.querySelector("#inp").value = "";
    container.append(task);
  } else {
    alert("Enter some Task ....");
  }

 
  span.addEventListener("click", (d) => {
    if (
      span.style.textDecoration != "line-through" &&
      span.style.textDecorationColor != "var(--btn_color)"
    ) {
      span.style.textDecoration = "line-through";
      // span.style.textDecorationColor = "var(--btn_color)";
    } else {
      span.style.textDecoration = "none";
      span.style.textDecorationColor = "transparent";
    }
    done.classList.toggle("checked");
    span.classList.toggle("taskDone");
  });
  done.addEventListener("click", (d) => {
    if (
      span.style.textDecoration != "line-through" &&
      span.style.textDecorationColor != "var(--btn_color)"
      ) {
        span.style.textDecoration = "line-through";
        // span.style.textDecorationColor = "var(--btn_color)";
      } else {
        span.style.textDecoration = "none";
        span.style.textDecorationColor = "transparent";
      }
      done.classList.toggle("checked");
      span.classList.toggle("taskDone");
  });

  cross.addEventListener("click", (c) => {
    c.target.parentElement.remove();
    var temp = arr.indexOf(span.innerText);
    arr.splice(temp, 1);
    console.log(arr);
    saveData();
  });
  saveData();
  // showData();
}

function saveData() {
  localStorage.setItem("User", JSON.stringify(arr));
}

// window.addEventListener('load',showdata);
// function showData(){
//   if(localStorage.getItem('User')){
//     arr.forEach(task=>{
//       console.log(task)
//     })
//   }
// }