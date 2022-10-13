import React from "react";

import { AiFillHome } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import logo from "../asset/Pokeball.png";
import { Link } from "react-router-dom";
function Layout({ children }) {
  return (
    <div id="container">
      <div className=" h-screen w-full overflow-y-scroll">
        <main className="content">{children}</main>

        <footer className="px-[4rem] py-7 navtom bottom-0 sticky">
          <div className="flex justify-between items-center">
            <Link to="/">
              <span>
                <AiFillHome size={30} className="text-primary-40" />
              </span>
            </Link>

            <img src={logo} className="h-[30px]" alt="" />
            <span>
              <MdFavorite size={30} className="text-primary-40" />
            </span>
          </div>
        </footer>
        {/* <BottomNavbar /> */}
      </div>
    </div>
  );
}
export default Layout;
