import React, { useState } from 'react'

export default function ItemCount() {
    const [count, setCount] = useState(0)
    return (
    <div>
        <span>LA CANTIDAD DE ITEMS ES...</span>
        <button button onClick={() => setCount(count + 1)}>
        +
        </button> <span>{count}</span>
        <button button onClick={() => setCount(count - 1)}>
        -
        </button>
    </div>
    )
}