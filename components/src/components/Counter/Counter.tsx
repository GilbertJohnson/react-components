import {useState} from 'react';
import './Counter.css'

function Counter(){
    const [count,dispatchCount] = useState(0);
    const [addCount,dispatchaddCount] = useState(1);
    
    const handleIncrement =()=>{
        dispatchCount(count+Number(addCount));
    }
    const handleDecrement=()=>{dispatchCount(count-Number(addCount))};
    const handleChange = (e)=>{
        dispatchaddCount(e.target.value);
    }
    return (
        <div className='counter-app'>
            <h2>Counter: {count}</h2>
            <span>Differ by : </span>
            <input type="number" value={addCount} onChange={handleChange} />
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            
        </div>
    )
}
export default Counter;