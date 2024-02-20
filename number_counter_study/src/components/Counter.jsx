import React, { useState } from 'react';
import CounterInput from './CounterInput';
import CountButton from './CountButton';

function Counter(props) {
    const [ number, setNumber ] = useState(0);
    const [ count, setCount ] = useState(0);

    const handleOnIncrease = () => {
        setNumber(number + count);
    }

    const handleOnDecrease = () => {
        setNumber(number - count);
    }

    return (
        <div>
        <h1>{ number }</h1>
        <CounterInput setCount={setCount}/>
        <CountButton title="-" onClick={handleOnDecrease}/>
        <CountButton title="+" onClick={handleOnIncrease}/>
        </div>
    );
}

export default Counter;