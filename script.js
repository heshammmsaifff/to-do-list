const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// adding task function
function addTask() {
  if (inputBox.value === "") {
    alert("You must add something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let deleteSpan = document.createElement("span");
    deleteSpan.innerHTML = "\u00d7";
    li.appendChild(deleteSpan);
  }
  inputBox.value = "";
  saveData();
}

// click event
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

// enter = add task
document.querySelector("input").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    document.querySelector("button").click();
  }
});

// saving data
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// show saved data when start
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

// scroll for bottom to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
