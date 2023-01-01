import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "redux/auth/selectors";
import PropTypes from "prop-types";

/**
 * Если (маршрут публичный) && (пользователь залогинен) => рендер <Navigate> на redirectTo
 * Иначе => рендер компонента
 * 
 * Условия:
 * 1. Должен повторять API Route
 * 2. Должне рендерить route
 * 
 */

export const RestrictedRoute = ({component: Component, redirectTo="/"}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

RestrictedRoute.protoTypes = {
  component: PropTypes.element.isRequired,
  redirectTo: PropTypes.string.isRequired,
};