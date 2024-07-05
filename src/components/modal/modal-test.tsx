import {useState} from "react";
import Modal from "./Modal.tsx";
import "./modal.css";

export default function ModalTest() {

    const [showModal, setShowModal] = useState(false)
    function handleModalToggle() {
        setShowModal(!showModal)
    }
    function handleClose() {
        setShowModal(false)
    }

    const bodyHtml = <div>
        Customized BODY Content
    </div>

    return (
        <div>
            <button
            onClick={handleModalToggle}>OPEN MODAL</button>
            {
                showModal && <Modal
                onClose={handleClose}
                body={bodyHtml}/>
            }
        </div>
    )
}