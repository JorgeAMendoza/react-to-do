interface headerProps {
  toggleTheme: () => void;
}

export const Header = ({ toggleTheme }: headerProps) => {
  return (
    <header>
      <h1>TODO</h1>
      <button onClick={() => toggleTheme()}>Toggle Theme</button>
    </header>
  );
};
