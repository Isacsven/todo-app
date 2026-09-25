import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Ring kund" },
    { id: 2, text: "Ring kund" },
  ]);
  const [draft, setDraft] = useState("");

  function handleChange(e) {
    setDraft(e.target.value);
  }

  function handleAdd() {
    const text = draft.trim();
    if (text === "") return;
    setTodos([...todos, { id: Date.now(), text: text }]);
    setDraft("");
  }

  function handleClear() {
    setDraft("");
  }

  function clearList() {
    setTodos([]);
  }

  function handleRemove(idToRemove) {
    const remaining = todos.filter(function (todo) {
      return todo.id !== idToRemove;
    });
    setTodos(remaining);
  }

  return (
    <main>
      <h1>Övnings-todo</h1>
      <p>Antal uppgifter: {todos.length}</p>
      <input type="text" value={draft} onChange={handleChange} placeholder="Skriv uppgift..." />
      <button type="button" onClick={handleAdd}>Lägg till</button>
      <button type="button" onClick={handleClear}>Rensa</button>
      <button type="button" onClick={clearList}>Clear list</button>

      <ul>
        {todos
          .filter(function (todo) {
            return todo.text
              .toLowerCase()
              .includes(draft.toLowerCase());
          })
          .map(function (todo) {
            return (
              <li key={todo.id}>
                {todo.text}
                <button type="button" onClick={function () { handleRemove(todo.id); }}>
                  Ta bort
                </button>
              </li>
            );
          })}
      </ul>
    </main>
  );
}

export default App;
