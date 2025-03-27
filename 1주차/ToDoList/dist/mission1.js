"use strict";
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const doneList = document.getElementById("doneList");
addBtn.addEventListener("click", () => {
    const text = todoInput.value.trim();
    if (text !== "") {
        addTodoItem(text);
        todoInput.value = "";
    }
});
todoInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        const text = todoInput.value.trim();
        if (text !== "") {
            addTodoItem(text);
            todoInput.value = "";
        }
    }
});
function addTodoItem(text) {
    const itemDiv = document.createElement("div");
    itemDiv.className = "item";
    itemDiv.textContent = text;
    const completBtn = document.createElement("button");
    completBtn.textContent = "완료";
    completBtn.addEventListener("click", () => {
        moveToDone(itemDiv);
    });
    itemDiv.appendChild(completBtn);
    todoList.appendChild(itemDiv);
}
function moveToDone(item) {
    const btns = item.getElementsByTagName("button");
    if (btns.length > 0) {
        item.removeChild(btns[0]);
    }
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";
    deleteBtn.className = "delete-btn";
    item.appendChild(deleteBtn);
    doneList.appendChild(item);
    deleteBtn.addEventListener("click", () => {
        doneList.removeChild(item);
    });
}
