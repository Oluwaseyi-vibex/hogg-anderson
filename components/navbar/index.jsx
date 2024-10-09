import React from "react";
import Link from "next/link";
import { lexendPeta, poppins } from "@/utils/font/fonts";
import { Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";

const NavBar = () => {
  return (
    <div
      className={`${poppins.className} sticky top-0 z-50 w-full px-16  flex items-center justify-center navbar font-semibold  py-5  bg-[#333333] text-[#F5F5F5]`}
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
        <Image
          src={"/logo.png"}
          alt="logo"
          width={500}
          height={500}
          className="w-[40%]"
        />
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
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-56 p-2 shadow"
              >
                <li>
                  <Link href={"/Services/Accounting-Services"}>
                    Accounting Services
                  </Link>
                </li>
                <li>
                  <Link href={"/Services/Inventory-Management-System"}>
                    Inventory Management System
                  </Link>
                </li>
                <li>
                  <Link href={"/Services/Sales-Analytics"}>
                    Sales Analytics
                  </Link>
                </li>
                <li className="w-full">
                  <Link href={"/Services/Accounting-System"}>
                    Accounting System
                  </Link>
                </li>

                <li className="w-full">
                  <Link href={"/Services/Business-Advisory"}>
                    Business Advisory
                  </Link>
                </li>
                <li className="w-full">
                  <Link href={"/Services/Training"}>Training</Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
              <div tabIndex={0} role="button" className="">
                Academy
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-56 p-2 shadow"
              >
                <li>
                  <Link href={"/academy/data-entry"}>Data Entry Academy</Link>
                </li>
                <li>
                  <Link href={"/academy/accounting-software-training"}>
                    Accounting Software Training
                  </Link>
                </li>
                <li>
                  <Link href={"/academy/property-management-system"}>
                    Property Mgt. System in Hotels
                  </Link>
                </li>
                <li className="w-full">
                  <Link href={"/academy/hospitality-accounting-diploma"}>
                    Diploma in Hospitality Accounting
                  </Link>
                </li>

                <li className="w-full">
                  <Link href={"/academy/adv-diploma-in-hospitality-accounting"}>
                    Adv. Diploma in Hospitality Accounting
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link href="/Blog">Blog</Link>
          </li>
          <li>
            <Link href="/getInTouch">Contact</Link>
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
