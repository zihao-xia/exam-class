import { Outlet } from "react-router-dom";
import Header from "./header";
import Menu from "./menu";
import useShowMenu from "@/hooks/useShowMenu";
import useShowHeader from "@/hooks/useShowHeader";

function Layout() {

  const showMenu = useShowMenu()
  const showHeader = useShowHeader()

  return (
    <div className="layout">
      {showHeader && (
        <div className="header_wrap">
          <Header />
        </div>
      )}

      {showMenu && (
        <div className="nav_wrap">
          <Menu />
        </div>
      )}

      <div className="outlet_wrap">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;