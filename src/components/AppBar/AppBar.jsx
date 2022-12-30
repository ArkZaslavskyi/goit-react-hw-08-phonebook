import { AuthNav } from "components/AuthNav";
import { Navigation } from "components/Navigation";
import { UserMenu } from "components/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/selectors";
import css from "./AppBar.module.css";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};