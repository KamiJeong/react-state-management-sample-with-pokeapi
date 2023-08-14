import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "design-system";

const Layout = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar
        logo="PokeApi"
        menus={[
          { id: "0", label: "Go To Filed", onClick: () => navigate("/filed") },
          { id: "1", label: "PokeBook", onClick: () => navigate("/pokebook") },
        ]}
      />
      <Outlet />
    </div>
  );
};

export default Layout;
