import css from "./AppBar.module.css";

export const AppBar = () => {
  return (
    <header className={css.header}>
      Navigation (Home, Contacts)
      AuthNav (Register, Login) | UserMenu
    </header>
  );
};