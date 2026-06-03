import { useState } from "react";
import {v4 as uuid} from 'uuid'
import './index.css'
const TodoList = (props) =>{
    const {todos,setTodo,deleteTodo,changeStatus} = props;
    const [name,setName] = useState('')
    const [details,setDetails] = useState('')
    const addTodo = e => {
        e.preventDefault();
        setTodo({
            id: uuid(),
            name,
            des:details,
            completed: false
        })
        setName('')
        setDetails('')
    }
    const [comp,setComp] = useState(true);
    const [not,setNo] = useState(true);
    const todo = todos.filter(todo => comp && not ? true : comp ? todo.completed : not ? !todo.completed : false)
    return (
        <div>
            <h2>Task Flow Todo App</h2>
            <div>
                <div className="filters">
                    <input type="checkbox" checked={comp} onChange={() => setComp(prev => !prev)} id="comp"/>
                    <label htmlFor="comp">Completed</label>
                    <br/>
                    <input type="checkbox" checked={not} onChange={() => setNo(prev => !prev)} id='no'/>
                    <label htmlFor="no"> Not Completed</label> 
                    <br/>
                </div>
                <form onSubmit = {addTodo}>
                    <label>Task Name: </label>
                    <input type = 'text' value={name} onChange={(e) => setName(e.target.value)}/>
                    <br/>
                    Task Details: 
                    <textarea value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
                    <br/>
                    <button type='submit'>Add</button>
                </form>
            </div>
            <p>Tasks Lists <span>{todo.length} {todo.length > 1 ? 'tasks' : 'task'}</span></p>
            <ul>
                {todo.map(todo => (
                    <li key = {todo.id}>
                        <div>
                            <h5 className={todo.completed ? "strike" : 'normal'}>{todo.name}</h5>
                            <p className={todo.completed ? "strike" : 'normal'}>{String(todo.des).substring(0,10)}...</p>
                        </div>
                        <div className="modifications">
                            <input id={todo.id} type='checkbox' checked = {todo.completed} onChange={() => changeStatus(todo.id)}/>
                            <label htmlFor={todo.id}>Complete</label> 
                            <br/>
                            <button type='button' onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList