import { FolderTree } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router";
import { NAME, ROUTES } from "../constants/constants_homepage";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 z-50 flex h-16 w-full items-center justify-between rounded-b-md bg-white/70 px-4 shadow-sm backdrop-blur-md md:px-16">
      <div
        onClick={() => navigate(ROUTES.home.path)}
        className="flex cursor-pointer items-center gap-x-2"
      >
        {/* // TODO: Logo Goes Here */}
        <FolderTree className="text-accent h-auto w-6" />
        <span className="text-lg font-semibold">{NAME}</span>
      </div>
      <div className="flex items-center gap-x-2">
        {/* //! Activate after Launch */}
        {/* <Link
          to={ROUTES.login.path}
          className="hover:text-accent text-text-primary cursor-pointer px-3 py-2 font-medium transition-all"
        >
          {ROUTES.login.name}
        </Link>
        <Link
          to={ROUTES.signup.path}
          className="bg-accent hover:bg-accent-hover cursor-pointer rounded-lg px-3 py-2 font-medium text-white transition-all hover:rounded-md"
        >
          {ROUTES.signup.name}
        </Link> */}
        {/* //! Deactivate after Launch */}
        <Link
          to={ROUTES.waitlist.path}
          className="bg-accent hover:bg-accent-hover cursor-pointer rounded-lg px-3 py-2 font-medium text-white transition-all hover:rounded-md"
        >
          {ROUTES.waitlist.name}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
