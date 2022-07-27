import { useState, useEffect } from "react"
import './MyComponents.css'

const Counter = () => {

    const [count, setCount] = useState(1);

    function add() {
        setCount(count + 1)
    }

    function minus() {
        setCount(count - 1)
    }

    useEffect(() => {
        alert('HI Kajal')
    }, [])

    useEffect(() => {
        alert(`count change ${count} done!!`)
    },[count])


    return (
        <div className="container">
            <h2>{count}</h2>
            <button onClick={add}>+</button>
            <button onClick={minus}>-</button>
        </div>
    )
}

export default Counter