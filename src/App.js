import  React from 'react';
 import TaskList from './components/TaskList' 
 import TaskListContextProvider from './components/context/TaskListContext';
 import Header from './components/Header';
 import TaskForm from './components/TaskForm.js'
import './App.css';

function App() {
  return (
    <TaskListContextProvider>
     <div className="container">
        <div className="app-wrapper">
          <Header />
           <div className="main">
             <TaskForm />
             <TaskList />
          </div>
        </div>
      </div>
     </TaskListContextProvider>
  );
}

export default App;
