import { useEffect, useState } from 'react';
import './Timer.css'

const Timer = () => {
    const [hour,setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [timerActive,setTimerActive] = useState(false);
    const [message,setMessage] = useState('');

    useEffect(()=>{
        let interval = null;
        if(timerActive &&(hour>0 || minute > 0 || second > 0)){
            interval = setInterval(()=>{
                if(second>0){
                    setSecond((seconds)=>seconds-1);
                }else if(minute>0){
                    setMinute((minutes)=>minutes-1);
                    setSecond(59);
                }else if(hour>0){
                    setHour((hours)=>hours-1);
                    setMinute(59);
                    setSecond(59);
                }
            },1000);
        }else if(!timerActive && interval !==null){
            clearInterval(interval);
        }
        return ()=>clearInterval(interval)
    },[timerActive,hour,minute,second])

    const startTimer = ()=>{
        if(hour ===0 && minute ===0 && second ===0){
            setMessage("Please provide a value for the timer.");
        }else{
            setTimerActive(true);
            setMessage('');
        }
    }
    const pauseTimer = ()=>{
        setTimerActive(false);
    }
    const resetTimer = ()=>{
        setHour(0);
        setMinute(0);setSecond(0);setTimerActive(false);
    }
    const formatTime = (time)=>{
        return time<10? `0${time}` : `${time}`;
    };
  return (
    <div className='container'>
        <span className='container__title'>Countdown Timer</span>
        <div className='container__inputs'>
            <input type='number'
                value={formatTime(hour)}
                onChange={(e)=>setHour(Math.max(0,Math.min(23,parseInt(e.target.value))))}
                className='container__inputs--time' />
            <p className='container__inputs--colon'>:</p>
            <input
          type='number'
          value={formatTime(minute)}
          onChange={(e) =>
            setMinute(Math.max(0, Math.min(59, parseInt(e.target.value))))
          }
          className='container__inputs--time'
        />
        <p className='container__inputs--colon'>:</p>
        <input
          type='number'
          value={formatTime(second)}
          onChange={(e) =>
            setSecond(Math.max(0, Math.min(59, parseInt(e.target.value))))
          }
          className='container__inputs--time'
        />
      </div>
      <div className='container__btns'>
        {!timerActive ? (
          <button className='btn start' onClick={startTimer}>
            Start
          </button>
        ) : (
          <button className='btn stop' onClick={pauseTimer}>
            Pause
          </button>
        )}
        <button className='btn reset' onClick={resetTimer}>
          Reset
        </button>
      </div>
      {message && <div className='container__message'>{message}
    </div>}
    </div>
  )
}

export default Timer