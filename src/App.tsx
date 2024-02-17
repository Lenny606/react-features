import {useState} from 'react'
import Acordion from "./components/acordion/Accordion.tsx";
import './App.css'
import './components/acordion/styles.css'
import ColorGenerator from "./random-color/ColorGenerator.tsx";

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <Acordion/>
            <ColorGenerator/>
        </>
    )
}

export default App
