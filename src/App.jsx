import { useState } from "react";

import "./App.css";
import Todo from "./components/todos/Todo";
import TodoForm from "./components/todos/TodoForm";
import Search from "./components/Search";

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

  const [search, setSearch] = useState("");

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
    console.log("novo todo");
  };

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
    const newTodos = [...todos];
    newTodos.map((todo) => {
      // if (todo.id == id ){
      //   todo.isCompleted = !todo.isCompleted
      // }
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo;
    });
    setTodos(newTodos);
  };

  const searchText = () => {};
  return (
    <>
      <div className="app">
        <h1>Lista de Tarefas</h1>
        <Search search={search} setSearch={setSearch} />
        <div className="todo-list">
          {todos
            .filter((todo) =>
              todo.text.toLowerCase().includes(search.toLowerCase())
            )
            .map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
              />
            ))}
        </div>

        <TodoForm addTodo={addTodo} />
      </div>
    </>
  );
}

export default App;
