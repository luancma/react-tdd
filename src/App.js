/* eslint-disable no-unused-expressions */
import React, { useState } from "react";

function App() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState("");

  function handleAddTechs() {
    setTechs([...techs, newTech]);
    setNewTech("");
  }

  return (
    <form data-testid="tech-form" onSubmit={handleAddTechs}>
      <ul data-testid="tech-list">
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <label htmlFor="tech">Tech</label>
      <input
        type="text"
        id="tech"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />
      <button type="button" onClick={handleAddTechs}>
        Adicionar
      </button>
    </form>
  );
}

export default App;
