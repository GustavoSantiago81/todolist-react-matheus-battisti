import React from "react";

function Todo({todo}) {
  return (
    <div>
      <p>{todo.text}</p>
      <p className="category">({todo.category})</p>

      <button>Completar</button>
      <button>x</button>
    </div>
  );
}

export default Todo;
