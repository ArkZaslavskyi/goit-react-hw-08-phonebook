import { AuthNav } from "components/AuthNav";
import { Navigation } from "components/Navigation";
import css from "./AppBar.module.css";

export const AppBar = () => {
  return (
    <header className={css.header}>
      <Navigation />
      <AuthNav /> {/** | UserMenu */}
    </header>
  );
};