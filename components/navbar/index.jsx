import React from "react";
import Link from "next/link";
import { lexendPeta } from "@/utils/font/fonts";
import { Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

const NavBar = () => {
  return (
    <div
      className={`${lexendPeta.className} sticky top-5 z-50 w-full rounded-md flex items-center justify-center navbar font-semibold  p-5  bg-black text-white`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Logo</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-lg px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <details>
              <summary>Services</summary>
              <ul className="p-2">
                <li>
                  <Link href="#">Submenu 1</Link>
                </li>
                <li>
                  <Link href="#">Submenu 2</Link>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <Link href="#">Industries</Link>
          </li>
          <li>
            <Link href="#">Our Team</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <Button
          variant="gradient"
          gradient={{ deg: 133, from: "pink", to: "black" }}
          size="md"
          radius="md"
          w={150}
        >
          Get started
        </Button>
      </div>
    </div>
  );
};

export default NavBar;