import { ThemeToggle } from "./ThemeToggle"

export const Header = () =>{
    return <header>
        <h1>TODO</h1>
        <ThemeToggle themeValue="light" toggleTheme={() => console.log("Toggling Theme")}/>
    </header>
}