import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import About from './components/Pages/About';
// import {DUMMY_DATA} from './tasks_data';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(state => state = tasksFromServer);
    };

    getTasks();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  };

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  // Add Task
  const onAddTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });

    const data = await res.json();

    setTasks(state => {
      return [...state, data];
    });

    // Create a Task using State
    // const id = Math.floor(Math.random() * 10000 + 1);

    // const newTask = { id, ...task };

    // setTasks(currTasks => {
    //   return [...currTasks, newTask];
    // });
  };

  // Toggle Reminder
  const onToggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = await { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    });

    const data = await res.json();

    setTasks((prevState) => (
      prevState.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task)
    ));
  };

  // Delete Task
  const onDeleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    });

    setTasks((tasks) => (
      tasks.filter((task) => task.id !== id)
    ));
  };

  const homeProps = {
    showAddTask,
    setShowAddTask,
    onAddTask,
    tasks,
    onDeleteTask,
    onToggleReminder
  }

  return (
    <div className='container'>
      <Router>
        <Header showAddTask={showAddTask} onAddTaskForm={() => setShowAddTask(state => !state)} />
        <Routes>
          <Route path="/" element={<Home {...homeProps} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;