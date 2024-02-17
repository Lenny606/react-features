import data from "./data.json"
import {useState} from "react";

function Accordion() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelect, setEnableMultiSelect] = useState(false);
    const [multiSelect, setMultiSelect] = useState([]);

    const handleSelection = (id) => {
        if (selected !== id) {
            setSelected(id);
        } else {
            setSelected(null);
        }
    }

    const handleEnableMultiSelection = () => {
        console.log(enableMultiSelect)
        setEnableMultiSelect(!enableMultiSelect ? true : false)
        if (enableMultiSelect) {
            setMultiSelect([])
        }
    }

    const handleMultiSelect = (id) => {
        let copyMultiple = [...multiSelect]
        let findIndexOfId = copyMultiple.indexOf(id)
        if (findIndexOfId === -1) {
            copyMultiple.push(id)
        } else {
            copyMultiple.splice(findIndexOfId, 1)
        }

        setMultiSelect(copyMultiple)
    }

    return <div>
        <div className={"wrapper"}>
            <button
                // TODO refactor btn into component
                onClick={() => handleEnableMultiSelection()}
                className={enableMultiSelect ? "enabled" : ""}
            >Enable Multi Select
            </button>
            <div className={"accordion"}>
                {data && data.length > 0 ?
                    data.map((item) => (
                        <div key={item.id}
                             onClick={enableMultiSelect ?
                                 () => handleMultiSelect(item.id) :
                                 () => handleSelection(item.id)}
                             className={"item"}>
                            <div className={"topic"}>
                                {item.topic}
                                <span>
                                    +
                                </span>
                            </div>
                            {
                                selected === item.id || multiSelect.indexOf(item.id) !== -1 ?
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