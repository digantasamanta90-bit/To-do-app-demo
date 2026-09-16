let input = document.querySelector(".input-field");
let addBtn = document.querySelector(".add-btn");
let lowerContainer = document.querySelector(".lower-container");

addBtn.addEventListener("click", function () {
    if (input.value.trim() === "") {
        return;
    }

    let checklist = document.createElement("div");
    checklist.classList.add("checklist");

    let checkBtn = document.createElement("button");
    checkBtn.classList.add("check-btn");
    checkBtn.innerText = "Done";

    let task = document.createElement("p");
    task.classList.add("task");
    task.innerText = input.value;

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.innerText = "Edit";

    let dltBtn = document.createElement("button");
    dltBtn.classList.add("dlt-btn");
    dltBtn.innerText = "dlt";

    checklist.appendChild(checkBtn);
    checklist.appendChild(task);
    checklist.appendChild(editBtn);
    checklist.appendChild(dltBtn);

    lowerContainer.appendChild(checklist);

    input.value = "";

    dltBtn.addEventListener("click", function () {
        checklist.remove();
    });

    checkBtn.addEventListener("click", function () {
        task.style.textDecoration = "line-through";
    });
});