import React from 'react'

function TodoForm() {
  return (
    <div>
        <h2>Criar Tarefa:</h2>
        <form action="">
            {/* Não precisa de "name" no input??? */}
            {/* <input type="text" name="" id="" /> */}
            <input type="text" placeholder='Digite o Título'/>
            <select>
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