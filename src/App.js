import { useState } from "react";
import PopupElement from "./popup";

const App= ()  => {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen= () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="">
      {isOpen && (
      <PopupElement
        handleClose={() => {setIsOpen(false)}}
        content={
          <p>
            Way to create simple popup in ReactJS. Set up React application;
            Create popup component; Handle the Popup; Output. 1. Set up React
            application.
          </p>
        }
      />)}

      <button onClick={handleOpen}>Click to Open Popup</button>
    </div>
  );
}

export default App;
