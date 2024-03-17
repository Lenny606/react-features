import useLocalStorage from "./useLocalStorage.jsx";
import "./styles.css";

export default function ThemeSwitcher() {

    const [theme, setTheme] = useLocalStorage('theme', 'dark')

    function handleToggleTheme(){
        setTheme(theme === 'light' ? "dark" : 'light')
    }

    return (
        <div className={"switcher"} data-theme={theme}>
            <div className={"switcher-container"}>
                <p>HELLO WORLD</p>
                <button
                onClick={handleToggleTheme}>Change Theme</button>
            </div>

        </div>
    )
}