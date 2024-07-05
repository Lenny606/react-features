
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
import QRGenerator from "./qr-code-generator/QRGeneretar.tsx";
import ThemeSwitcher from "./components/theme-switcher/ThemeSwitcher.tsx";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator.tsx";
import TabsTest from "./components/dynamic-tab/tabs-test.tsx";
import Callback from "./components/callback/callback.tsx";
import ModalTest from "./components/modal/modal-test.tsx";


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
            <QRGenerator />
            <ThemeSwitcher />
            <ScrollIndicator url={"https://dummyjson.com/products?limit=15"} />
            <TabsTest />
            < Callback />
            <ModalTest />
        </>
    )

}

export default App
