import React from "react";
import { Link } from "react-router-dom";
import { SearchIcon, AlignJustify, LogOut } from "lucide-react";
import { useMenuStore } from "../store/headerMenu.js";
import { useAuthStore } from "../store/authUser";
import { useContentStore } from "../store/content.js";

const Navbar = () => {
  const { menuOpen, toggleMenu } = useMenuStore();
  const { user, logout } = useAuthStore();
  const { contentType, setContentType } = useContentStore();
  console.log("contentType: ", contentType);

  return (
    <>
      <header className="max-w-6xl mx-auto flex flex-wrap justify-between items-center p-4 relative z-40">
        <div className="flex items-center justify-start gap-10">
          <Link to={"/"}>
            <img
              src="/netflix-logo.png"
              alt="/netflix-logo"
              className="w-[120px] h-[40px]"
            />
          </Link>
          <div className="hidden sm:flex justify-center items-center gap-2 ">
            <Link to={"/"} onClick={() => setContentType("movie")}>
              <p className="text-white text-sm hover:underline font-light">
                Movies
              </p>
            </Link>
            <Link to={"/"} onClick={() => setContentType("tv")}>
              <p className="text-white text-sm hover:underline font-light">
                TV Shows
              </p>
            </Link>
            <Link to={"/history"}>
              <p className="text-white text-sm hover:underline font-light">
                Search History
              </p>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3">
          <Link to={"/search"}>
            <SearchIcon />
          </Link>
          <Link to={"/"}>
            <img
              src={`/${user.image}`}
              alt="avatar"
              className="w-[25px] h-[25px] rounded-sm"
            />
          </Link>
          <LogOut onClick={logout} className=" cursor-pointer" />
          <AlignJustify
            className="sm:hidden hover:cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </header>
      {menuOpen && (
        <div
          className={`${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } relative z-40 transition-all duration-300 ease-in-out overflow-hidden bg-black text-white flex flex-col items-start p-4 sm:hidden`}
        >
          <Link
            to={"/"}
            className="w-full"
            onClick={() => {
              toggleMenu();
              setContentType("movie");
            }}
          >
            <p className="text-white text-sm hover:underline font-light mb-2 border-b-[0.5px] border-gray-500">
              Movies
            </p>
          </Link>
          <Link
            to={"/"}
            className="w-full"
            onClick={() => {
              toggleMenu();
              setContentType("tv");
            }}
          >
            <p className="text-white text-sm hover:underline font-light mb-2 border-b-[0.5px] border-gray-500">
              TV Shows
            </p>
          </Link>
          <Link to={"/history"} className="w-full" onClick={toggleMenu}>
            <p className="text-white text-sm hover:underline font-light mb-2 border-b-[0.5px] border-gray-500">
              Search History
            </p>
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
