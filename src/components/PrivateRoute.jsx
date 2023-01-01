import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "redux/auth/selectors";


/**
 * Если (маршрут приватный) && (пользователь залогинен) => рендер компонента
 * Иначе => рендер <Navigate> на redirectTo
 * 
 * Условия:
 * 1. Должен повторять API Route
 * 2. Должне рендерить route
 * 
 */

export const PrivateRoute = ({component: Component, redirectTo="/"}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
