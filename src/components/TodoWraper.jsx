import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const TodoWraper = () => {
  return (
    <div>
        <TodoForm />
        <TodoList />
    </div>
  )
}

export default TodoWraper