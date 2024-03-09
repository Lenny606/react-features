
import Acordion from "./components/acordion/Accordion.tsx";
import './App.css'
import './components/acordion/styles.css'
import './components/tree-menu/data.js'
import ColorGenerator from "./random-color/ColorGenerator.tsx";
import StarRating from "./components/star-rating/StarRating.tsx";
import ImageSlider from "./components/image-slider/ImageSlider.tsx";
import LoadMore from "./components/load-more-btn/LoadMore.tsx";
import TreeMenu from "./components/tree-menu/TreeMenu.tsx";
import data from "./components/tree-menu/data";


function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <Acordion/>
            <StarRating numOfStars={5}/>
            <ColorGenerator/>
            <ImageSlider url={'https://picsum.photos/v2/list'} limit={5}/>
            <LoadMore limit={5}/>
            <TreeMenu menu={data}/>
        </>
    )

}

export default App
