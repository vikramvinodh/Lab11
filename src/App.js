import React, { useState } from 'react';
import TaskList from './components/TaskLists';
import TaskForm from './components/TaskForms';
// import TaskItems from './components/TaskItems';
import './styles.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    const newTask = {
      id: Math.random().toString(),
      name: taskName,
    };
    setTasks([...tasks, newTask]);
  };

  const editTask = (taskId, newName) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, name: newName } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  return (
    <div className="app">
      <h1>Task Management App</h1>
      <TaskForm onSubmit={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
    </div>
  );
}

export default App;
