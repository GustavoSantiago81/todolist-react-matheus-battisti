import React from "react";

function Todo({todo}) {
  return (
    <div>
      <p>{todo.text}</p>
      <p className="category">({todo.category})</p>

      <button className="complete">Completar</button>
      <button className="remove">x</button>
    </div>
  );
}

export default Todo;
