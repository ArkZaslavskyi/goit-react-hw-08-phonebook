import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar";

const css = {
  layout: { maxWidth: 1024, margin: "0 auto", padding: "0 16px" },
  fallback: {fontWeight: 700, color: "red"},
};

export const Layout = () => {
  return (
    <div style={css.layout}>
      <AppBar />
      <Suspense fallback={<div style={css.fallback}>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}; 