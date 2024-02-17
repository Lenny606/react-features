import {FaStar} from "react-icons/fa";
import {useState} from "react";
import './styles.css'


export default function StarRating({numOfStars = 5}){
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleRating(index){
        setRating(index)
    }

    function handleMouseMove(index){
        setHover(index)
    }

    function handleMouseLeave(){
        setHover(rating)
    }

    return(
        <div className={"star-rating"}>
            {
                //number of stars from props, each star has index from array, start from 0 (+1)
                //comparing indexes
            [...Array(numOfStars)].map(
                (_,index)=>{
                    index++

                    return <FaStar
                    className={index <= (rating||hover) ? 'active' : 'inactive'}
                    onClick={()=>handleRating(index)}
                    onMouseMove={()=>handleMouseMove(index)}
                    onMouseLeave={()=>handleMouseLeave()}
                    key={index}
                    size={40}
                    />
                })
            }
        </div>
    )
}