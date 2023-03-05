import React , { useState } from 'react';
import ToDoList from './components/ToDoList';
import NewToDo from './components/NewToDo';
import { Todo } from './todo.models'
import { v4 as uuidv4 } from 'uuid'

const App: React.FC = () =>  {
  const [todos, setTodos] = useState<Todo[]>([])

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, {id: genId(), text: text}])
    todos.map(todo => {
      console.log(todo.id)
    })
  }

  const genId = () => {
    return uuidv4()
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <div className="App">
      <NewToDo onAddTodo={todoAddHandler} />
      <ToDoList items={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
}

export default App;
