import { useState } from 'react'

const Divide = () => {
    const [sumNumber, setSum] = useState(100);

    const handleDivide = () => {
        setSum(sumNumber / 5);
    }

    return (
        <>
            <h1>{sumNumber}</h1>
            <button onClick={handleDivide}>chia 5</button>
        </>
    )
}

export default Divide;
