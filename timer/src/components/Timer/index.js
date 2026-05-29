import {useState,useRef, useEffect} from 'react'
import GetTime from '../GetTime';

function Timer(){
    const [timerInMin,setTimer]  = useState(1);
    const [isRun,setRun] = useState(false);
    const [timeElapsed, setTime] = useState(0);
    let timerId = useRef(null)
    const onDecrement = () => {
        if(!isRun && timerInMin > 1){
            setTimer(prev => prev - 1);
        }
    }
    const onIncrement = () => {
        if(!isRun){ setTimer(prev => prev + 1);}
    }
    const startOrStop = () => {
        if(!isRun){
            setTime(0);
            timerId.current = setInterval(() => {
                setTime(prev => prev + 1)
            },1000);
        }else{
            clearInterval(timerId.current);

        }
        setRun(prev => !prev)

    }
    const l = [10,20,30];
    const check = () => {
        let sec = timerInMin * 60 - timeElapsed;
        if(sec === 0){
            clearInterval(timerId.current);
            setRun(false);
            alert(`Timer Session of ${timerInMin} min Completed`)
            setTime(0)
        }
    }
    useEffect(() => {
        check();
        return () => {
            clearInterval(timerId.current)
        }
    },[timeElapsed])


    return ( 
        <div>
            <h2> Timer </h2>
            <p>Built-in Timers</p>
            <ul>
            {
                l.map(li => 
                    <li key={li}>
                        <button type = "button" onClick={() => setTimer(li)}>
                            {li}
                        </button>
                    </li>
                )
            }
            </ul>
            <button type = "button" onClick={onDecrement}>-</button>
            <p>{timerInMin}</p>
            <button type = "button" onClick={onIncrement}>+</button>
            <br/>
            <button type='button' onClick={startOrStop}>{isRun ? "Stop" : "Start"}</button>
            <GetTime  seconds = {timerInMin * 60 - timeElapsed}/>
        </div>
    )
}

export default Timer