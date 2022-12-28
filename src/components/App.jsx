import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

      </Route>
    </Routes>
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
  );
};
