import { useState } from 'react'
import './style.css'

const Task = ({ name }) => {
  return <li>{name}</li>;
};

const Tasks = ({ tasks }) => {
  return (
    <section>
      <h3>Tasks:</h3>
      <ul>
      {tasks.map((task, index) => (
        <Task key={index} name={task} />
      ))}
    </ul>
</section>
    
  );
};
const AddForm = ({onAdd}) => {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
      if(inputValue.trim()) {
        onAdd(inputValue.trim());
        setInputValue('');
      }
  }
  return(
      <form onSubmit={handleSubmit}>
      <input 
        placeholder='Add task' 
        value={inputValue} 
        onChange={(e)  => setInputValue(e.target.value)}
      />
      <button type='submit'>Add task</button>
    </form>
  )
}
const ToDoComponent = () => {
  const [tasks, setTasks] = useState([]);
  const handleTask = (newTask) => {
      setTasks([...tasks, newTask]);
  }
  return(<>
    <AddForm onAdd={handleTask}/>
    <Tasks tasks={tasks}/>
      </>)
}
const App = () => {
  return (
        <ToDoComponent/>
  )
}


export default App