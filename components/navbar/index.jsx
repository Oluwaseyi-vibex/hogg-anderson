import React from "react";
import Link from "next/link";
import { lexendPeta, poppins } from "@/utils/font/fonts";
import { Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

const NavBar = () => {
  return (
    <div
      className={`${poppins.className} sticky top-0 z-50 w-full  flex items-center justify-center navbar font-semibold  p-5  bg-[#333333] text-[#F5F5F5]`}
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
        <ul className="menu menu-horizontal text-base px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
              <div tabIndex={0} role="button" className="">
                Services
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
            {/* <details>
              <summary>Services</summary>
              <ul className="p-4 menu menu-vertical text-xs ">
                <li>
                  <Link href={"/Services/Accounting-Services"}>
                    Accounting Services
                  </Link>
                </li>

                <li className="w-full">
                  <Link
                    href={"/Services/Inventory-Management-System"}
                    className="w-[230px]"
                  >
                    Inventory Management System
                  </Link>
                </li>

                <li className="w-full">
                  <Link className="w-[230px]" href={"#"}>
                    Sales Analytics
                  </Link>
                </li>
                <li className="w-full">
                  <Link className="w-[230px]" href={"#"}>
                    Accounting System
                  </Link>
                </li>
                <li className="w-full">
                  <Link className="w-[230px]" href={"#"}>
                    Business Advisory
                  </Link>
                </li>
                <li className="w-full">
                  <Link className="w-[230px]" href={"#"}>
                    Training
                  </Link>
                </li>
              </ul>
            </details> */}
          </li>

          <li>
            <Link href="#">Certification</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <Button
          variant="gradient"
          bg={"#4169E1"}
          // gradient={{ deg: 133, from: "pink", to: "black" }}
          size="md"
          radius="lg"
          w={180}
          h={45}
        >
          Get started
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
