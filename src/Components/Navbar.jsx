import { Link } from "react-router-dom";

const Navbar = () => {
  const menus = [
    {
      Path: "/",
      MenuName: "Home",
    },
    {
      Path: "/about",
      MenuName: "About",
    },
    {
      Path: "/all-recipes",
      MenuName: "Recipes",
    },
    {
      Path: "/contact",
      MenuName: "Contact",
    },
  ];
  return (
    <div className="px-5 py-3 flex items-center justify-center rounded-full">
      <div>
        <ul className="flex items-center justify-center gap-5">
          {menus.map((menu, index) => {
            return (
              <li key={index}>
                <Link
                  to={menu.Path}
                  className="text-sm font-semibold text-slate-600"
                >
                  {menu.MenuName}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
