const todoInput = document.getElementById("todoInput") as HTMLInputElement;
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const todoList = document.getElementById("todoList") as HTMLDivElement;
const doneList = document.getElementById("doneList") as HTMLDivElement;

addBtn.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (text !== "") {
    addTodoItem(text);
    todoInput.value = "";
  }
});

todoInput.addEventListener("keyup", (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    const text = todoInput.value.trim();
    if (text !== "") {
      addTodoItem(text);
      todoInput.value = "";
    }
  }
});

function addTodoItem(text: string): void {
  const itemDiv = document.createElement("div");
  itemDiv.className = "item";
  itemDiv.textContent = text;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "완료";
  completeBtn.className = "complete-btn";

  completeBtn.addEventListener("click", () => {
    moveToDone(itemDiv);
  });

  itemDiv.appendChild(completeBtn);
  todoList.appendChild(itemDiv);
}

function moveToDone(item: HTMLDivElement): void {
  const btns = item.getElementsByTagName("button");
  if (btns.length > 0) {
    item.removeChild(btns[0]!);
  }

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  deleteBtn.className = "delete-btn";

  deleteBtn.addEventListener("click", () => {
    doneList.removeChild(item);
  });

  item.appendChild(deleteBtn);
  doneList.appendChild(item);
}
