import {useState} from "react";
// import "./styles.css"

export default function Callback() {

    const [promise, setPromise] = useState(0)
    const [error, setError] = useState("no promise returned")
    const [final, setFinal] = useState("")

    function promiseFunction(): Promise<any>{
        return  new Promise((resolve) =>{
            resolve({
                id: 1,
                value: "this is a promise from a function"
            })
        })
    }
    // promiseFunction()
    //     .then(data => setPromise(data.value))
    //     .catch(err => setError(err))
    //     .finally(() => setFinal("job done"))

    async function getPromise(){
        try {
            const data = await promiseFunction();
            setPromise(data.value);
        } catch (err: any) {
            setError(err)
        } finally {
            setFinal("job done from async")
        }
    }
    getPromise()
    return (
        <div className={'tabs-container'}>
            <div className={'heading'} style={{color: "red"}}>
                <h1>Callback TEST</h1>
            </div>
            <div className={'content'}>
                {promise ?? error}
                <p>{final ?? error}</p>
            </div>

        </div>
    )
}