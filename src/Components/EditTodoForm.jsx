import React, {useState} from 'react'

export const EditTodoForm = ({editodo, task}) => {
    const[value, setValue] = useState(task.task)

    const handleSubmit = e =>{
        e.preventDefault();

        editodo(value, task.id);

        setValue("")
    }
  return (
    <div>
      <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value}
        placeholder='Бим-Бум-Бам...' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Изменить</button>

      </form>
    </div>
  )
}

export default EditTodoForm