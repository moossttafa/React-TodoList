import React, {useState, useContext, useEffect} from "react";
import {TaskListContext }from './context/TaskListContext';

function TaskForm() {

    const { addTask , clearList ,editItem , editTask} = useContext(TaskListContext);
    const [ title , setTitle ] = useState ('');

    const handelSubmit = e =>{
        e.preventDefault()
        if (!editItem) {
            addTask(title)
            setTitle('')
          } else {
            editTask(title, editItem.id)
          }
    }
    const handelChange = e =>{
        setTitle(e.target.value)
     }

     useEffect(() => {
        if (editItem) {
          setTitle(editItem.title)
         } else {
          setTitle('')
        }
      }, [editItem])

  return (
    <div>
      <form onSubmit={handelSubmit} className="form">
        <input
         onChange={handelChange}
         value={title}
          type="text"
          placeholder="Add Task..."
           className="task-input"
        />
        <div className="buttons">
          <button type="submit" className="btn add-task-btn">
              {editItem ?  'Edit Tast' : 'Add Task' }
          </button>
          <button onClick={clearList} className="btn clear-btn">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
