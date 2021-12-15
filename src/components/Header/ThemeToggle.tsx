type ThemeToggleProps = {
    themeValue: string,
    toggleTheme: () => void
}

export const ThemeToggle = ({themeValue, toggleTheme}: ThemeToggleProps) =>{
    return <button onClick={toggleTheme}>{themeValue}</button>
}