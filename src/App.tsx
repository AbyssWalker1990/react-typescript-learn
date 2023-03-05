import React from 'react';
import ToDoList from './components/ToDoList';


const App: React.FC = () =>  {
  const todos = [{id: 't1', text: 'Finish the course'}]
  return (
    <div className="App">
      {/* Component that adds ToDo */}
      <ToDoList items={todos}/>
    </div>
  );
}

export default App;
