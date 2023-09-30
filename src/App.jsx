import { useState } from "react";

import "./App.css";
import Todo from "./components/todos/Todo";
import TodoForm from "./components/todos/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  // pode usar uma function, ou arrow function
  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 90) + 1,
        text: text,
        category: category,
        isCompleted: false,
      },
      // const newId = Math.floor(Math.random()*90)+1;
    ];

    setTodos(newTodos);
    console.log("novo todo")
  }

  function removeTodo(id) {
    const newTodos = [...todos]; // Por que usar spread?
    const filteredTodos = newTodos.filter((todo) => 
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos); //    todos.splice();
  }

  const completeTodo = (id) => {
    //   const index = todos.findIndex((todo)=> todo === id);
    //     if (!index){ return;}
    //      todos[index].isCompleted=true;
    //       setTodos([...todos]);
    // Ou usando o filter e splice
    const newTodos = [...todos]
     newTodos.map ((todo) => {
      // if (todo.id == id ){
      //   todo.isCompleted = !todo.isCompleted
      // }
      todo.id === id ? todo.isCompleted = !todo.isCompleted : todo
    }
    );
    setTodos(newTodos);
  }
  return (
    <>
      <div className="app">
        <h1>Lista de Tarefas</h1>
        <div className="todo-list">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
          ))}
        </div>

        <TodoForm addTodo={addTodo}/>
      </div>
    </>
  );
}

export default App;
