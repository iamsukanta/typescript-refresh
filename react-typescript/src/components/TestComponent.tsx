import { useState } from "react";

function TestComponent() {
  function createInitialTodoLists() {
    const initialTodoLists = [];
    for (let i = 0; i < 20; i++ ) {
      initialTodoLists.push({ id: i, title: `Todo List ${i + 1}` });
    }
    console.log("Initial todo lists created");
    return initialTodoLists;
  }
  const [ todos, setTodos ] = useState(createInitialTodoLists());
  const [ text, setText ] = useState("Hello");
  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => { setText(""); setTodos([{ id: todos.length, title: text}, ...todos]); }}>Add</button>

      { todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      )) }
    </>
  );
}

export default TestComponent;
