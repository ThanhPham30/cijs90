import { useMemo, useEffect, useState } from 'react'

const ComUseMemo = () => {
    const [couter, setCouter] = useState(1);
    const user = useMemo(() => {return {
        name: 'A'
    }}, []);
    useEffect(() => {
        console.log('----- re useMemo', user)
    }, [user])
    return (
        <div>
            <h3>useMemo</h3>
            <input value={couter} />
            <button onClick={() => { setCouter(prev => prev + 1) }}>couter</button>
        </div>
    )
}

export default ComUseMemo;
