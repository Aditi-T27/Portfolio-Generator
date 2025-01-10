import './App.css';
import { useState } from 'react';

function Button({ value, onclickhandle }) {
  return <button onClick={onclickhandle}>{value}</button>;
}

function Canvas({ rows }) {
  return (
    <div className="canvas">
      <h1>Canvas</h1>
      <div>
        {rows.map((_, index) => (
          <textarea
            key={index} // Add a unique key for each <textarea>
            className="textarea"
            placeholder="Enter Text"
          ></textarea>
        ))}
      </div>
    </div>
  );
}

function Lcol({ addTextArea }) {
  const value = 'Text Box';

  function onclickhandle() {
    addTextArea();
  }

  return (
    <div className="column">
      <h1>Columns</h1>
      <Button value={value} onclickhandle={onclickhandle} />
    </div>
  );
}

function App() {
  const [rows, setRows] = useState([]);

  function addTextArea() {
    // Add a new entry to the rows array
    setRows((prevRows) => [...prevRows, {}]);
  }

  return (
    <div className="container">
      <Lcol addTextArea={addTextArea} />
      <Canvas rows={rows} />
    </div>
  );
}

export default App;






// import './App.css';
// import {useState} from 'react';
// function Button({value,onclickhandle}){
//   return(
//   <button onClick={onclickhandle}>{value}</button>
//   );
// }
// function Canvas({text,settext}){
//   const rows = [];
//   if(text){
//       rows.push(<textarea className='textarea' placeholder='Enter Text' ></textarea>)
//       settext(false);
//   }
//    return(
//     <>
//     <div className="canvas">
//       <h1>Canvas</h1>
//       <div >{rows}</div>
//       </div>
//     </>
//    );
// }

// function Lcol({text,settext}){
//   const value='Text Box';

//    function onclickhandle(){
//      settext(true);
//    }
//    return(
//     <>
//     <div className="column">
//     <h1>Columns</h1>
//     <Button value={value} onclickhandle={onclickhandle}/>
//     </div>

//     </>
//    )
// }

// function App() {
//   const[text, settext]=useState(false);
//   return (
//     <>
//     <div className='container'>
//        <Lcol text={text} settext={settext}/>
//        <Canvas text={text} settext={settext}/>
//        </div>
//     </>
//   );
// }

// export default App;





// import './App.css';
// import { useState } from 'react';

// function Button({ value, onclickhandle }) {
//   return <button onClick={onclickhandle}>{value}</button>;
// }

// function Canvas({ rows, setRows }) {
//   const handleDragStart = (event, index) => {
//     // Store the index of the dragged text box
//     event.dataTransfer.setData("text/plain", index);
//   };

//   const handleDrop = (event) => {
//     // Prevent default behavior
//     event.preventDefault();

//     // Get the index of the dragged text box
//     const draggedIndex = event.dataTransfer.getData("text/plain");
//     const { clientX, clientY } = event;

//     // Update the position of the dropped text box
//     setRows((prevRows) =>
//       prevRows.map((box, index) =>
//         index === parseInt(draggedIndex, 10)
//           ? { ...box, x: clientX, y: clientY }
//           : box
//       )
//     );
//   };

//   const handleDragOver = (event) => {
//     // Allow dropping
//     event.preventDefault();
//   };

//   return (
//     <div className="canvas" onDragOver={handleDragOver} onDrop={handleDrop} style={{ position: "relative", width: "100%", height: "500px", border: "1px solid black" }}>
//       <h1>Canvas</h1>
//       {rows.map((box, index) => (
//         <textarea
//           key={index}
//           className="textarea"
//           placeholder="Enter Text"
//           draggable // Enable dragging
//           onDragStart={(event) => handleDragStart(event, index)}
//           style={{
//             position: "absolute",
//             top: box.y,
//             left: box.x,
//             cursor: "move",
//           }}
//         ></textarea>
//       ))}
//     </div>
//   );
// }

// function Lcol({ addTextBox }) {
//   const value = 'Text Box';

//   return (
//     <div className="column">
//       <h1>Columns</h1>
//       <Button value={value} onclickhandle={addTextBox} />
//     </div>
//   );
// }

// function App() {
//   const [rows, setRows] = useState([]);

//   const addTextBox = () => {
//     // Add a new text box with a default position
//     setRows((prevRows) => [
//       ...prevRows,
//       { x: 50, y: 50 }, // Default position
//     ]);
//   };

//   return (
//     <div className="container">
//       <Lcol addTextBox={addTextBox} />
//       <Canvas rows={rows} setRows={setRows} />
//     </div>
//   );
// }

// export default App;
