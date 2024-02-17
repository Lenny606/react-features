
import Acordion from "./components/acordion";
import './App.css'
import './components/acordion/styles.css'
import StarRating from "./components/star-rating/StarRating.tsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Acordion />

        <StarRating numOfStars={5}/>
    </>
  )
}

export default App
