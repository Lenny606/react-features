import QRCode from "react-qr-code";
import {useState} from "react";

export default function QRGenerator() {

    const [input, setInput] = useState("");
    const [qrCode, setQrCode] = useState("");

    const handleGenerate = () => {
        setQrCode(input);

        //reset
        setInput("")
    }


    return (
        <div>
            <h1>QR Code Generator</h1>
            <div style={{marginBottom:"5px"}}>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    name={"qr-code"}
                    placeholder={"Enter value"}/>
                <button
                    onClick={handleGenerate}
                    disabled={input && input.trim() === "" ? true : false}
                >Generate
                </button>
            </div>
            <div>
                <QRCode
                    id={"qr-code-value"}
                    value={qrCode}
                    bgColor={"white"}
                    style={{marginTop:"5px"}}
                />
            </div>
        </div>
    )
}