import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Counter</h1>
            <div className="card">
                <button className='btn' onClick={() => setCount((count) => count + 1)}>
                    +
                </button>
                <p>count is {count}</p>
                <button className="btn" onClick={() => setCount((count) => count - 1)}>
                    -
                </button>
            </div>

        </div>
    )
}

export default Counter
