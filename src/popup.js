import React from "react";

const PopupElement = ({handleClose, content}) =>{
    return(
        <div className="popup-box">
            <div className="box">
                <button onClick={handleClose} className="btn-close">x</button>
                {content}
            </div>
        </div> 
    )
}
export default PopupElement;