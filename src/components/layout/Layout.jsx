import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <h1>RTZ Garage</h1>
      <Outlet />
    </>
  );
}

export default Layout;