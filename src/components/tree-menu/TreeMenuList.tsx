import TreeMenuItem from "./TreeMenuItem.tsx";

export default function TreeMenuList({list = []}) {

    return (
        <ul className={"menu-list-container"}>
            {/*list check*/}
            {
                list && list.length
                    ? list.map((listItem) => {
                        return <TreeMenuItem item={listItem}/>
                    })
                    : null
            }
        </ul>
    )
}