import { AuthNav } from "components/AuthNav";
import { Navigation } from "components/Navigation";
import { useAuth } from "hooks";
import { UserMenu } from "components/UserMenu";
import css from "./AppBar.module.css";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};