import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar";

export const Layout = () => {
  return (
    <div style={{maxWidth: 1024, margin: "0 auto", padding: "0 16px"}}>
      <AppBar />
      <Outlet/>
    </div>
  );
}; 