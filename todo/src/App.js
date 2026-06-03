import {useEffect, useState} from 'react'
import TodoList from './components/TodoList'
import './App.css';


function App() {
  const [todos,setTodo] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const set = function(item){
    setTodo(prev => [...prev,item])
  }
  const deleteTodo = id => {
    setTodo(prev => prev.filter(todo => todo.id !== id))
  }
  const changeStatus = id => {
    setTodo(prev => prev.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          completed : !todo.completed
        }
      }
      return todo;
    }))
  }
  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])
  return (
    <TodoList todos = {todos} setTodo = {set} changeStatus = {changeStatus} deleteTodo = {deleteTodo}/>
  )
}

export default App;
