import { useRef } from "react";
import './App.css';
import CompMemo from "./component/CompMemo";
import ComCallback from "./component/ComCallback";
import ComUseMemo from "./component/ComUseMemo";

function App() {
  const inputRef = useRef(null);
  const shapeRef = useRef(null);

  const handleAddClassId = () => {
    // Thêm class hoặc id cho input
    inputRef.current.classList.add('your-class'); // Thêm class
    inputRef.current.id = 'your-id'; // Thêm id
  };

  const handleChangeShape = () => {
    // Toggle class 'circle' trên phần tử
    shapeRef.current.classList.toggle('circle');
    // Toggle class 'square' trên phần tử
    // shapeRef.current.classList.toggle('square');
  };

  return (
    <>
      <h2>Bài tập 1</h2>
      <h3>Thêm class, id</h3>
      <input ref={inputRef} type="text" />
      <button onClick={handleAddClassId}>add class, Id to input</button>
      <h3>Thay đổi hình tròn, hình vuông</h3>
      <div ref={shapeRef} style={{textAlign: 'center'}} className="shape"></div>
      <button style={{marginTop: '20px'}} onClick={handleChangeShape}>chang shape</button>
      <h2>Bài tập 2 memo</h2>
      <CompMemo />
      <h2>Bài tập 3 callback</h2>
      <ComCallback />
      <h2>Bài tập 4 useMemo</h2>
      <ComUseMemo />
    </>
  )
}

export default App
