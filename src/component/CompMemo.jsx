import { useState } from 'react'
import CompMemoChild from './CompMemoChild';

const CompMemo = () => {
    const [couter, setCouter] = useState(1);
    return (
        <div>
            <h3>compMemoB</h3>
            <input value={couter} />
            <button onClick={() => { setCouter(prev => prev + 1) }}>couter</button>
            <CompMemoChild couter={couter} user={{ username: 'mindX' }} />
        </div>
    )
}

export default CompMemo;
