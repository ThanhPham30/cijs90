import { useState } from 'react'

const Minus = () => {
    const [sumNumber, setSum] = useState(100);

    const handleMinus = () => {
        setSum(sumNumber - 5);
    }

    return (
        <>
            <h1>{sumNumber}</h1>
            <button onClick={handleMinus}>tru 5</button>
        </>
    )
}

export default Minus;
