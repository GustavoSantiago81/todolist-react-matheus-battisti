import { useState} from 'react'

function TodoForm({addTodo}) {
    const [value,setValue] = useState("");
    const [category,setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return

        console.log("foi");
        console.log(value);
        console.log(category);

        // adicionar todo
        //limpar os campos
        addTodo(value, category);
        setCategory('');
        setValue('');
        
    }
  return (
    <div className='todo-form'>
        <h2>Criar Tarefa:</h2>
        <form onSubmit={handleSubmit}>
            {/* Não precisa de "name" no input??? */}
            {/* <input type="text" name="" id="" /> */}
            <input type="text" placeholder='Digite o Título'
            value={value} onChange={(e) => setValue(e.target.value)}/>
            <select
            value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type="submit">Criar Tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm