import {useState} from "react";
import "./styles.css"

export default function Tabs({tabsContent, onChange}) {

    const [currentTabIndex, setCurrentTabIndex] = useState(0)

    function handleOnClick(index: number) {
        setCurrentTabIndex(index)
        onChange(index)
    }

    return (
        <div className={'tabs-container'}>
            <div className={'heading'}>
                {tabsContent.map((item, index) => (
                    <div key={item.label}
                         onClick={() => handleOnClick(index)}
                        className={`tab-item ${currentTabIndex === index ? "active" : ""}`}>
                        <span className={'label'}>{item.label}</span>
                    </div>
                ))
                }

            </div>
            <div className={'content'}>
                {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
            </div>
        </div>
    )
}