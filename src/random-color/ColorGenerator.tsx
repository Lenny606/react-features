import {useState} from "react";

export default function ColorGenerator() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    return (
        <div className={'container'}
             style={{
                 width: "100vh",
                 height: "100vh",
                 backgroundColor: color
             }}>
            <button>HEX Color</button>
            <button>RGB Color</button>
            <button>Random Color</button>
        </div>
    )
}