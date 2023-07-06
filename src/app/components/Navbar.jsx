"use client";
import { React, useState } from "react";
// import Logo from "../assets/img/Pandulipi Logo.png";
import "../components/navbar.css";
// import { useAuthContext } from "../hooks/useAuthContext";
// import { useLogout } from "../hooks/useLogout";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  // const { user } = useAuthContext();
  // const { logout } = useLogout();
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };
  const clickAndScroll = () => {
    handleClick();
    scrollToTop();
  };
  const verifyLogout = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <nav className="sticky top-0 z-50  px-2 sm:px-4 py-2.5 bg-gray-900 drop-shadow-2xl">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/img/Pandulipi Logo.png"
            className="m-3 "
            alt="Pandulipi Logo"
            height={60}
            width={60}
          />
          <span className="self-center text-2xl md:text-3xl font-semibold whitespace-nowrap text-white">
            Pandulipi
          </span>
        </Link>
        <input
          onClick={handleClick}
          checked={checked}
          type="checkbox"
          id="menu-toggle"
          styles={{ display: "none" }}
          className="hidden"
        />
        <label
          for="menu-toggle"
          className="inline-flex items-center p-2 ml-3 text-lg text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          {!checked ? (
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </label>
        <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
          <ul className="flex flex-col md:items-center p-4 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
              <Link
                onClick={clickAndScroll}
                href="/"
                className="block text-white hover:bg-opacity-20 py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:bg-transparent md:p-0 dark:text-white"
                styles={({ isActive }) =>
                  isActive
                    ? { color: "#00B8FF ", fontWeight: "bold" }
                    : { color: "white", fontWeight: "normal" }
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={clickAndScroll}
                href="/about"
                className="block text-white  hover:bg-opacity-20 py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                styles={({ isActive }) =>
                  isActive
                    ? { color: "#00B8FF ", fontWeight: "bold" }
                    : { color: "white", fontWeight: "normal" }
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={clickAndScroll}
                href="/gallery"
                className="block  text-white hover:bg-opacity-20 py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                styles={({ isActive }) =>
                  isActive
                    ? { color: "#00B8FF ", fontWeight: "bold" }
                    : { color: "white", fontWeight: "normal" }
                }
              >
                Events Gallery
              </Link>
            </li>
            <li>
              <Link
                onClick={clickAndScroll}
                href="/blog"
                className="block text-white  hover:bg-opacity-20 py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                styles={({ isActive }) =>
                  isActive
                    ? { color: "#00B8FF ", fontWeight: "bold" }
                    : { color: "white", fontWeight: "normal" }
                }
              >
                Blog Page
              </Link>
            </li>
            <li>
              <Link
                onClick={clickAndScroll}
                href="/elibrary"
                className="block text-white  hover:bg-opacity-20 py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                styles={({ isActive }) =>
                  isActive
                    ? { color: "#00B8FF ", fontWeight: "bold" }
                    : { color: "white", fontWeight: "normal" }
                }
              >
                eLibrary
              </Link>
            </li>
            <li>
              <Link
                onClick={clickAndScroll}
                href="/team"
                className="block text-white  hover:bg-opacity-20 py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                styles={({ isActive }) =>
                  isActive
                    ? { color: "#00B8FF ", fontWeight: "bold" }
                    : { color: "white", fontWeight: "normal" }
                }
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                onClick={clickAndScroll}
                href="/contact"
                className="block text-white  hover:bg-opacity-20 py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                styles={({ isActive }) =>
                  isActive
                    ? { color: "#00B8FF ", fontWeight: "bold" }
                    : { color: "white", fontWeight: "normal" }
                }
              >
                Contact
              </Link>
            </li>
            {/* <div className="flex gap-x-5 visible sm: justify-center">
              {!user ? (
                <>
                  <Link
                    onClick={clickAndScroll}
                    href="/login"
                    className="inline-block mt-3 md:mt-0 md:ml-10  px-6 py-2.5 bg-blue-600 text-white font-bold text-sm md:text-base leading-tight uppercase rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Login
                  </Link>
                  <Link
                    onClick={clickAndScroll}
                    href="/signup"
                    className="inline-block mt-3 md:mt-0 px-6 py-2 border-2 border-blue-600 text-blue-300 font-bold text-sm md:text-base leading-tight uppercase rounded hover:bg-blue-700 hover:bg-opacity-50 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Sign up
                  </Link>{" "}
                </>
              ) : (
                <Link
                  onClick={verifyLogout}
                  href="/login"
                  className="inline-block mt-3 md:mt-0 md:ml-10  px-6 py-2.5 bg-red-500 text-white font-bold text-sm md:text-base leading-tight uppercase rounded shadow-md hover:bg-red-800 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Logout
                </Link>
              )}
            </div> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
