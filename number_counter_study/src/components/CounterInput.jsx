import React, { useState } from 'react';

function CounterInput({ setCount }) {
    const [ inputValue, setInputValue ] = useState("");
    
    const handleOnChangeInput = (e) => {
        setInputValue(e.target.value);
        setCount(parseInt(e.target.value));
    }

    return (
        <input type="text" onChange={handleOnChangeInput} value={inputValue} />
    );
}

export default CounterInput;