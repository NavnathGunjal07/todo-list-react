import React, {useState} from 'react'
import TodoItem from './TodoItem'


// session 

function TodoMain() {
    const [task, setTask] = useState('');
    const [taskArray, setTaskArray] = useState([]);
    const onTaskChange = (event) => {
        setTask(event.target.value);
    }
    const addTask = () => {
        setTaskArray((prevTasks) => {
            return [...prevTasks, task];
        })
        setTask('');
    }
    const deleteItem = (id) => {
        console.log(id, 'deleted');
        setTaskArray((prevTasks) => {
            return prevTasks.filter((arrElement, index) => {
                return index !== id;
            })
        })
    }
    return (
        <div className="main_div">
            <div className="center_div">
                <h1>Todo List</h1>
                <input type="text" value={task} placeholder="Add your task" onChange={onTaskChange}/>
               <button className="newBtn" onClick={addTask}>Add Task</button>
               <ol>
                   {
                       console.log(taskArray)
                   }
                   {
                       taskArray.map((val, index) => {
                           return <TodoItem text={val} id={index} onSelect={deleteItem}/>
                       })
                   }
               </ol>
            </div>
        </div>
    )
}

export default TodoMain;