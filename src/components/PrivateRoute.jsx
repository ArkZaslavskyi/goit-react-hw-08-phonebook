import { Navigate } from "react-router-dom";
import { useAuth } from "hooks";
import PropTypes from "prop-types";


/**
 * Если (маршрут приватный) && (пользователь залогинен) => рендер компонента
 * Иначе => рендер <Navigate> на redirectTo
 * 
 * Условия:
 * 1. Должен повторять API Route
 * 2. Должне рендерить route
 * 
 */

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

PrivateRoute.protoTypes = {
  component: PropTypes.element.isRequired,
  redirectTo: PropTypes.string.isRequired,
};