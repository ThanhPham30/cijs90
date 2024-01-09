import { useCallback, useEffect, useState } from 'react'

const ComCallback = () => {
    const [couter, setCouter] = useState(1);
    const reFn = useCallback(() => {
        console.log('--------re funtion')
    }, []);
    useEffect(() => {
        console.log('----- re useCallback')
    }, [reFn])
    return (
        <div>
            <h3>useCallback</h3>
            <input value={couter} />
            <button onClick={() => { setCouter(prev => prev + 1) }}>couter</button>
        </div>
    )
}

export default ComCallback;
