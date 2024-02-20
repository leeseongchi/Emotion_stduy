import React, { useState } from 'react';
import './Counter.css';

function Counter() {
    const [number, setnumber] = useState(0);

    const countUpHandle = () => {
        setnumber(number + 1);
    }

    const countDownHandle = () => {
        setnumber(number - 1);
    }

  return (
    <div class="root">
        <div class="root-layout">
            <header class="header-layout">
                <h1>Counter</h1>
            </header>
            <main>
                <div class="main-layout">
                    <h1>{number}</h1>
                    <div class="button-layout">
                        <button onClick={countUpHandle}>+1</button>
                        <button onClick={countDownHandle}>-1</button>
                    </div>
                </div>
            </main>
            <footer class="footer-layout"></footer>
        </div>
    </div>
  )
}

export default Counter