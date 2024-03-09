import {useState} from "react";
import './styles.css'

export default function ColorGenerator() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function handleCreateRandomHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorPart(hex.length)];
        }
        setColor(hexColor)
    }

    function randomColorPart(length) {
        return Math.floor(Math.random() * length);
    }

    function handleCreateRandomRgbColor() {
        const rgbItems = []
        for (let i = 0; i < 3; i++) {
            let random = Math.floor(Math.random() * 256)
            rgbItems.push(random)
        }
        let rgbColor = `rgb(${rgbItems[0]},${rgbItems[1]},${rgbItems[2]})`

        setColor(rgbColor)
    }

    return (
        <div className={'container'}
             style={{
                 width: "100vh",
                 height: "100vh",
                 backgroundColor: color
             }}>
            <button style={{backgroundColor: typeOfColor === "hex" ? "grey" : ""}}
                    onClick={() => setTypeOfColor("hex")}>HEX Color
            </button>
            <button style={{backgroundColor: typeOfColor !== "hex" ? "grey" : ""}}
                    onClick={() => setTypeOfColor("rgb")}>RGB Color
            </button>
            <button onClick={
                typeOfColor === "hex" ?
                    handleCreateRandomHexColor :
                    handleCreateRandomRgbColor
            }
            >Generate Random Color
            </button>
        </div>
    )
}