import {useEffect, useState} from "react";
import './styles.css'

/**
 * url comes from parent component*/
export default function ScrollIndicator({url}) {
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [data, setData] = useState([])
    const [percentage, setPercentage] = useState(0)

    async function fetchData(getUrl) {
        try {
            setLoading(true)
            const response = await fetch(getUrl)
            const data = await response.json()

            if (data && data.products && data.products.length) {
                setData(data.products)

            }
            setLoading(false)

            console.log(data.products)
        } catch (e) {
            setErrorMsg(e.message)
        }
    }

    useEffect(() => {
        fetchData(url)
    }, [url])

    //scrolling feature
    //handle + scroll event

    function handleScrollPercentage() {
        //event on scroll
        // document.body.scrollTop
        // document.documentElement.scrollTop
        // document.documentElement.clientHeight
        // document.documentElement.scrollHeight

        //choose event
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop

        //     calculate
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        setPercentage(howMuchScrolled / height * 100)

    }

    useEffect(() => {
        //set event with hanlder
        window.addEventListener('scroll', handleScrollPercentage)

        //remove event
        return () => {
            window.removeEventListener("scroll", () => {
            })
        }
    }, []);

    if(errorMsg){
        return <div>Error : {errorMsg}</div>
    }

    if(loading){
        return <div>Loading data</div>
    }
    {console.log(percentage)}
    return (
        <div>
            <div className={"top-container"}>
                <h1>Scroll Indicator</h1>
                <div className={'scroll-progress-container'}>
                    <div className={'current-progress'}
                         style={{width: `${percentage}%`}}>
                    </div>
                </div>
            </div>
            <div className={'scroll-container'}>
                {data && data.length ?
                    data.map((item) => <p>{item.title}</p>) :
                    null
                }
            </div>
        </div>
    )
}