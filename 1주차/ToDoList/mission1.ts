// HTML 요소
const todoInput = document.getElementById("todoInput") as HTMLInputElement;
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const todoList = document.getElementById("todoList") as HTMLDivElement;
const doneList = document.getElementById("doneList") as HTMLDivElement;

// 할 일 항목 추가 이벤트 (버튼 클릭)
addBtn.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (text !== "") {
    addTodoItem(text);
    todoInput.value = "";
  }
});

// ENTER 키로도 할 일 추가
todoInput.addEventListener("keyup", (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    const text = todoInput.value.trim();
    if (text !== "") {
      addTodoItem(text);
      todoInput.value = "";
    }
  }
});

// 할 일 추가 함수
function addTodoItem(text: string): void {
  // <div class="item">text + [완료 버튼]</div>
  const itemDiv = document.createElement("div");
  itemDiv.className = "item";
  itemDiv.textContent = text;

  // 완료 버튼
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "완료";
  completeBtn.className = "complete-btn";

  completeBtn.addEventListener("click", () => {
    moveToDone(itemDiv);
  });

  itemDiv.appendChild(completeBtn);
  todoList.appendChild(itemDiv);
}

// 완료로 이동
function moveToDone(item: HTMLDivElement): void {
  // 기존 버튼(완료) 제거
  const btns = item.getElementsByTagName("button");
  if (btns.length > 0) {
    item.removeChild(btns[0]!);
  }

  // 삭제 버튼
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  deleteBtn.className = "delete-btn";

  deleteBtn.addEventListener("click", () => {
    doneList.removeChild(item);
  });

  item.appendChild(deleteBtn);
  doneList.appendChild(item);
}
