import {useEffect, useState} from "react";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs";
import './styles.css';


export default function ImageSlider({url, limit = 10, page = 1}) {

    const [images, setImages] = useState([])
    //saves indexes
    const [imageCurrent, setImageCurrent] = useState(0)
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(false)

    //*************
    //* HANDLERS **
    //*************
    function handlePrevious() {
        setImageCurrent(imageCurrent === 0 ?
            images.length - 1 : imageCurrent - 1)
    }

    function handleNext() {
        setImageCurrent(imageCurrent === images.length - 1 ? 0 : imageCurrent + 1)
    }


    async function fetchImages(url) {

        try {
            setLoading(true)

            const response = await fetch(`${url}?${page}=1&limit=${limit}`);
            const data = await response.json();

            if (data !== null) {
                setImages(data)
            }
        } catch (e) {
            setErrorMsg(e.message)
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (url !== "") {
            fetchImages(url)
        }
    }, [url])

    if (loading) {
        return <div>Loading</div>
    }

    if (errorMsg) {
        return <div>Error</div>
    }

    return (
        <div className={'slider-container'}>
            <BsArrowLeftCircleFill
                onClick={handlePrevious}
                className={'arrow arrow-left'}/>
            <span className={'circle-indicators'}>
                {
                    images && images.length ?
                        images.map((item, index) => (
                            <img id={item.id}
                                 className={imageCurrent === index ? 'current-image' : 'current-image hide'}
                                 src={item.download_url}
                                 alt={item.download_url}/>
                        )) :
                        null
                }
            </span>

            <BsArrowRightCircleFill
                onClick={handleNext}
                className={'arrow arrow-right'}/>
            <span className={'circle-indicators'}>
                    {
                        images && images.length ?
                            images.map((value, index) => {
                                return <button
                                    key={index}
                                    className={imageCurrent === index ? 'current-indicator' : "current-indicator hide-current"}
                                    onClick={()=>setImageCurrent(index)}
                                ></button>
                            }) :
                            null}
                </span>

        </div>
    )
}
