import { useAuth } from "hooks";
import { useDispatch } from "react-redux";
import { logout } from "redux/auth/operations";
import css from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.menuWrapper}>
      <p className={css.menuName}>{user.email}</p>
      <button className={css.btn} type="button" onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};