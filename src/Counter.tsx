import React from 'react'
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { increase, decrease } from './store'

const Counter = () => {
    // const [count, setCount] = useState(0)
    const dispatch = useDispatch()
    const count = useSelector(state => state.counter.count)

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={()=> dispatch(increase())}>+1</button>
            <button onClick={()=> dispatch(decrease())}>-1</button>
        </>
    )
}

export default Counter