import {useEffect, useState} from "react";
import './styles.css'

export default function LoadMore(props) {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);

    async function fetchData() {
        try {
            setLoading(true)
            const response = await fetch(
                `https://dummyjson.com/products?limit=${props.limit}&skip=${
                    count === 0 ? 0 : count * 20
                }`)
            const data = await response.json();

            if (data && data.products && data.products.length) {
                setProducts((prevData) => [
                    ...prevData,
                    ...data.products
                ])
            }

        } catch (e) {
            console.log(`Error : ${e}`)
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [count]);

    useEffect(() => {
        if (products.length >= 100) {
            setDisableButton(true)
        }
    }, [products]);

    if (loading) {
        return <div>
            Loading data...
        </div>
    }

    return <div
        className={'loading-container'}
    >
        <div className={'product-container'}>
            {
                products && products.length ?
                    products.map(product => {
                        return <div
                            className={'product'}
                            key={product.id}>
                            <img src={product.thumbnail} alt={product.title}/>
                            <p>{product.title}</p>
                        </div>
                    }) :
                    null}
        </div>
        <div
            className={'button-container'}>
            <button
                onClick={() => setCount(count + 1)}
                disabled={disableButton}
            >Load More
            </button>
        </div>

    </div>
}