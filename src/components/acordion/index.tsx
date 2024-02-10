import data from "./data.json"
import {useState} from "react";

function Accordion() {

    const [selected, setSelected] = useState(null);

    const handleSelection = (id) => {
        if (selected !== id) {
            setSelected(id);
        } else {
            setSelected(null);
        }

    }

    return <div>
        <div className={"wrapper"}>
            <div className={"accordion"}>
                {data && data.length > 0 ?
                    data.map((item) => (
                        <div onClick={() => handleSelection(item.id)} className={"item"}>
                            <div className={"topic"}>
                                {item.topic}
                                <span>
                                    +
                                </span>
                            </div>
                            {
                                selected === item.id ?
                                    <div className={'description'}>
                                        {item.description}
                                    </div>
                                    : null
                            }
                        </div>
                    ))
                    : "No data "}
            </div>
        </div>
    </div>
}

export default Accordion;