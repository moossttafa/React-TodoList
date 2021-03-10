import React,{useContext} from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import {TaskListContext} from './context/TaskListContext';

function Task ({task}) {
    const {removeTask, findItem} = useContext(TaskListContext);

    return (
        <li className="list-item">
            <span>{task.title}</span>
            <div>
                <button 
                className="btn-delet task-btn" 
                onClick={() => removeTask(task.id)}
                >
                    <DeleteOutlineIcon style={{ color: "#bbb"}} />
                </button>
                <button onClick={() => findItem(task.id)} className="btn-edit task-btn">
                    <CreateOutlinedIcon style={{ color: "#bbb"}} />
                </button>
            </div>
        </li>
    )
}

export default Task; 
