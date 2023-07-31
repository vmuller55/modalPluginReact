import React from 'react';
import './modal.css'

function Modal(props) {

    // useState/Effect to trigger modal display
    const [modalDisplay, setmodalDisplay] = React.useState(props.display);
    const onButtonClick = () => { 
        setmodalDisplay("none") 
    }
    React.useEffect(() => {
        var showModal = (props.display ? 'flex' : 'none');
        setmodalDisplay(showModal);
    }, [props.display])

    return  (<div className="modal-container"
            style={
                {
                    display:modalDisplay,
                }
            }>
            <div className="modal"> 
                <p>Employee {props.firstName} {props.lastName} has been created</p>
                <button className='modalBtn' onClick={onButtonClick}> Close </button>
            </div>
        </div>
    );
}
export default Modal;