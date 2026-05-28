import {useState} from 'react'
import './index.css'

function Home() {
    const [count,setCount] = useState(0)
    const [theme,setTheme] = useState(true)
    const onIncrement = function(){
        setCount(count + 1);
    }
    const onDecrement = function(){
        if(count > 0) {
            setCount(count - 1);
        }
    }
    const changeTheme = function(){
        setTheme(prev => !prev)
    }
    return(
        <div>
            <button type="button" onClick={changeTheme}>Change Theme</button>
            <h2>Counter</h2>
            <p className={theme ? 'dark' : 'white'}>{count}</p>
            <div>
                <button type="button" onClick={onIncrement}>Increment</button>
                <button type="button" onClick={onDecrement}>Decrement</button>
                <button type="button" onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    )

}

export default Home