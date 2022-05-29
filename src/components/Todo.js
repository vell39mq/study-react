import React, { useState } from 'react'

const Todo = () => {
    const [todoList, setTodoList] = useState([])
    const [inputValue, setInputValue] = useState('')
    
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // const id = todoList.length === 0 ? 1 : todoList.length + 1
        // setTodoList([...todoList, { id, 'item': inputValue }])
        setTodoList([...todoList,inputValue ])
        console.log(todoList)
    }

    const deleteTodo = (index) => {
        console.log(index)
        const newTodoList = [...todoList]
        newTodoList.splice(index,1)
        setTodoList(newTodoList)
    }
    return (
        <div>
            <h1>Todo List</h1>
            <li>
                {todoList.map((todo,index) =>
                    <ul key={index}>
                        {todo}
                        <button type='button' onClick={() => deleteTodo(index)}>Delete</button>
                    </ul>
                )}
            </li>
            <button type='button' onClick={()=> console.log('test')}>test</button>

            <h1>Create todo</h1>
            <form>
                <input type='text' value={inputValue} onChange={handleChange} />
                <button type='button' onClick={handleSubmit}>登録</button>
            </form>
        </div>
    )
}

export default Todo