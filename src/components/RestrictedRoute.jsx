import { Navigate } from "react-router-dom";
import { useAuth } from "hooks";
import PropTypes from "prop-types";

/**
 * Если (маршрут публичный) && (пользователь залогинен) => рендер <Navigate> на redirectTo
 * Иначе => рендер компонента
 * 
 * Условия:
 * 1. Должен повторять API Route
 * 2. Должен рендерить route
 * 
 */

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

RestrictedRoute.protoTypes = {
  component: PropTypes.element.isRequired,
  redirectTo: PropTypes.string.isRequired,
};