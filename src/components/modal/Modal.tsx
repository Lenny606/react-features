import {useEffect, useRef} from "react";

export default function Modal({id, header, body, footer, onClose}) {
    const modalRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div id={id || "modal"} className={'modal-container'}>
            <div ref={modalRef} className={"modal-content"}>
                <div className={"header"}>
                    {
                        header ? header : <p>DEFAULT HEADER TEXT</p>
                    }
                    <span onClick={onClose} className={"modal-close-icon"}>&times;</span>
                </div>
                <div className={"body"}>
                    {
                        body ? body : <p>DEFAULT BODY TEXT</p>
                    }
                </div>
                <div className={"footer"}>
                    {
                        footer ? footer : <p>DEFAULT FOOTER TEXT</p>
                    }
                </div>
            </div>
        </div>
    )
}