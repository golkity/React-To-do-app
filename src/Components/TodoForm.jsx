import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const[value, setValue] = useState("")

    const handleSubmit = e =>{
        e.preventDefault();

        addTodo(value);

        setValue("")
    }
  return (
    <div>
      <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value}
        placeholder='Что сегодня будем делать?' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Добавить список дел</button>

      </form>
    </div>
  )
}

export default TodoForm
