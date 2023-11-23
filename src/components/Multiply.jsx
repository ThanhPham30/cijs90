import { useState } from 'react'

const Multiply = () => {
    const [sumNumber, setSum] = useState(1);
    const handleMultiply = () => {
        setSum(sumNumber * 5);
    }
    return (
        <>
            <h1>{sumNumber}</h1>
            <button onClick={handleMultiply}>Nhan 5</button>
        </>
    )
}

export default Multiply;
