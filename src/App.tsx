
import Acordion from "./components/acordion/Accordion.tsx";
import './App.css'
import './components/acordion/styles.css'
import ColorGenerator from "./random-color/ColorGenerator.tsx";
import StarRating from "./components/star-rating/StarRating.tsx";
import ImageSlider from "./components/image-slider/ImageSlider.tsx";


function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <Acordion/>
            <StarRating numOfStars={5}/>
            <ColorGenerator/>
            <ImageSlider url={'https://picsum.photos/v2/list'} limit={5}/>
        </>
    )

}

export default App
