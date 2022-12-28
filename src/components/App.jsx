import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Home</div>} />
        <Route path="contacts" element={<div>Contacts</div>} />
        <Route path="register" element={<div>Register</div>} />
        <Route path="login" element={<div>Log In</div>} />
      </Route>
    </Routes>
  );
};
