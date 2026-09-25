import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    "Lära useState",
    "Se re-render",
    "Ta helg kl 16",
  ]);
  const [draft, setDraft] = useState("");

  function handleChange(e) {
    setDraft(e.target.value);
  }

  function handleAdd() {
    const text = draft.trim();
    if (text === "") return;
    setTodos([...todos, text]);
    setDraft("");
  }

  function handleClear() {
    setDraft("");
  }

  function clearList() {
    setTodos([]);
  }

  function handleRemove(textToRemove) {
    const remaining = todos.filter(function (todo) {
      return todo !== textToRemove;
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
            return todo
              .toLowerCase()
              .includes(draft.toLowerCase());
          })
          .map(function (todo) {
            return (
              <li key={todo}>
                {todo}
                <button type="button" onClick={function () { handleRemove(todo); }}>
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
