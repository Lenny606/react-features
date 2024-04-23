import Tabs from "./tabs.js";


export default function TabsTest(){

    const tabs = [
        {
            label:"Tab 1",
            content: "content 1"
        },
        {
            label:"Tab 2",
            content: "content 2"
        },
        {
            label:"Tab 3",
            content: "content 3"
        }
    ]

    function handleChange(currenIndex){
        console.log(currenIndex)
    }
    return (
        <Tabs tabsContent={tabs} onChange={handleChange}/>
    )
}