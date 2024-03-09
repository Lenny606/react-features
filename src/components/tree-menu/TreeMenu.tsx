import TreeMenuList from "./TreeMenuList.tsx";

export default function TreeMenu({menu = []}) {
    //menu is created from more components

    return <div className={"tree-menu-container"}>
        {
            menu && menu.length ?
                <TreeMenuList list={menu}/> :
                <p>No Menu data</p>
        }
    </div>

}