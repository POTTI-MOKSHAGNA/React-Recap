import {useState,useRef, useEffect} from 'react'
import GetTime from '../GetTime';
const StopWatch = function(){
    const [seconds,setTime] = useState(0);
    const [run,setRun] = useState(false);
    const timerId = useRef(null);
    const startTimer = () => {
        if(!run){
            setRun(true);
            timerId.current = setInterval(function(){
                setTime(prev => prev + 1);
            },1000)
        }
    }
    const endTimer = () => {
        setRun(false);
        clearInterval(timerId.current);
    }
    const resetTimer = function(){
        setTime(0);
        setRun(false);
        clearInterval(timerId.current);
    }
    useEffect(() => {
        if(seconds === 3601){
            clearInterval(timerId.current);
            setRun(false);
            setTime(0);
            alert("1hr Stop Watch Completed");
        }
        return () => {
            clearInterval(timerId.current)
        }
    },[seconds])
    
    return(
        <div>
            <h2>StopWatch</h2>
            <GetTime seconds={seconds}/>
            <button type = "button" onClick={startTimer}>Start</button>
            <button type = 'button' onClick={endTimer}>Stop</button>
            <button type = "button" onClick={resetTimer}>Reset</button>
        </div>
    )
}

export default StopWatch