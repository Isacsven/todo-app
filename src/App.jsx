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

  return (
    <main>
      <h1>Övnings-todo</h1>
      <p>Antal uppgifter: {todos.length}</p>
      <input type="text" value={draft} onChange={handleChange} placeholder="Skriv uppgift..." />
      <button type="button" onClick={handleAdd}>Lägg till</button>
      <button type="button" onClick={handleClear}>Rensa</button>
      <button type="button" onClick={clearList}>Clear list</button>

      <ul>
        <li>{todos[0]}</li>
        <li>{todos[1]}</li>
        <li>{todos[2]}</li>
      </ul>
    </main>
  );
}

export default App;
