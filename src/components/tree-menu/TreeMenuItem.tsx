import TreeMenuList from "./TreeMenuList.tsx";
import {useState} from "react";
import {FaMinus, FaPlus} from "react-icons/fa";
import './styles.css';

export default function TreeMenuItem({item}) {

    const [displayCurrentChild, setDisplayCurrentChild] = useState({})
    let hasChildren = item && item.children && item.children.length;

    function handleToggleClick(currentId){
        setDisplayCurrentChild({
            ...displayCurrentChild,
            [currentId] : !displayCurrentChild[currentId]
        })
    }

    return (
        <li>
            <div className={"menu-item-container"}>
                <p>
                    {item.label}
                </p>
                {hasChildren
                    ? <span onClick={()=>handleToggleClick(item.id)}>
                        {
                            displayCurrentChild[item.id] ? <FaMinus color={"red"}/> : <FaPlus color={"blue"} />
                        }
                    </span>
                    : null
                }
            </div>
            {/*    check for nested items*/}
            {
                hasChildren && displayCurrentChild[item.id]
                    ? <TreeMenuList list={item.children}/>
                    : null

            }
        </li>
    )
}