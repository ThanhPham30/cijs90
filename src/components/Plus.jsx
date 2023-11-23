import { useState } from 'react'

const Plus = () => {
    const [sumNumber, setSum] = useState(0);
    const handleSum = () => {
        setSum(sumNumber + 5);
    }
    return (
        <>
            <h1>{sumNumber}</h1>
            <button onClick={handleSum}>cong 5</button>
        </>
    )
}

export default Plus;
