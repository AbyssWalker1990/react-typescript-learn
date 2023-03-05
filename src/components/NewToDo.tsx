import React,  { useRef } from 'react'

const NewToDo: React.FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null)

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    if (textInputRef.current !== null) {
      const enteredText = textInputRef.current.value
      console.log(enteredText)
    }
  }

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor='todo-text'>ToDo text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type='submit'>ADD TODO</button>
    </form>
  )
}

export default NewToDo