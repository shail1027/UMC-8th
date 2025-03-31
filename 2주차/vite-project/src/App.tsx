import React, { useState, KeyboardEvent } from "react";

interface TodoItem {
  id: number;
  text: string;
}

const App: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [doneList, setDoneList] = useState<TodoItem[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const addTodo = (): void => {
    if (!input.trim()) return;
    const newTodo: TodoItem = { id: Date.now(), text: input.trim() };
    setTodoList([...todoList, newTodo]);
    setInput("");
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") addTodo();
  };

  const completeTodo = (item: TodoItem): void => {
    setTodoList(todoList.filter(todo => todo.id !== item.id));
    setDoneList([...doneList, item]);
  };

  const deleteTodo = (item: TodoItem): void => {
    setDoneList(doneList.filter(done => done.id !== item.id));
  };

  const containerStyle = {
    backgroundColor: darkMode ? "#333" : "#f0f0f0",
    color: darkMode ? "#fff" : "#000",
    minHeight: "100vh",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "sans-serif",
  };

  return (
    <div style={containerStyle}>
      {/* 다크 모드 토글 버튼 */}
      <div style={{ textAlign: "right", marginBottom: "10px" }}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: "5px 10px",
            backgroundColor: darkMode ? "#555" : "#ddd",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {darkMode ? "라이트 모드" : "다크 모드"}
        </button>
      </div>

      <h1 style={{ textAlign: "center" }}>White ToDo List</h1>

      {/* 입력 영역 */}
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="할 일을 입력 후 Enter"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={handleKeyUp}
          style={{
            flex: 1,
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px 0 0 4px",
          }}
        />
        <button
          onClick={addTodo}
          style={{
            padding: "10px 20px",
            marginLeft: "0",
            fontSize: "16px",
            border: "none",
            backgroundColor: "#28a745",
            color: "#fff",
            borderRadius: "0 4px 4px 0",
            cursor: "pointer",
          }}
        >
          추가
        </button>
      </div>

      {/* 목록 영역 */}
      <div style={{ display: "flex", gap: "20px" }}>
        {/* 해야 할 일 */}
        <div style={{ flex: 1 }}>
          <h2>해야 할 일</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {todoList.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "8px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  marginBottom: "8px",
                  backgroundColor: darkMode ? "#444" : "#fff",
                }}
              >
                <span>{item.text}</span>
                <button
                  onClick={() => completeTodo(item)}
                  style={{
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  완료
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* 해낸 일 */}
        <div style={{ flex: 1 }}>
          <h2>해낸 일</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {doneList.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "8px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  marginBottom: "8px",
                  backgroundColor: darkMode ? "#444" : "#fff",
                }}
              >
                <span>{item.text}</span>
                <button
                  onClick={() => deleteTodo(item)}
                  style={{
                    backgroundColor: "#dc3545",
                    color: "#fff",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
