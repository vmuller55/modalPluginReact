import React from 'react';
import './modal.css'

function Modal(props) {
    return  (
        <div className="modal-container">
            <div className="modal"> 
                <p>Employee has been created</p>
                <button className='modalBtn'> Close </button>
            </div>
        </div>
    );
}
export default Modal;