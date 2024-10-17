"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { lexendPeta, poppins } from "@/utils/font/fonts";
import { Button, Drawer } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";
import Image from "next/image";
import { Colors } from "@/utils/font/color";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NavBar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const navRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      navRef.current,
      {
        opacity: 0,
        y: -100,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      }
    );
  });
  return (
    <div
      ref={navRef}
      className={`${poppins.className} sticky top-0  z-50 w-full md:px-16 p-4 flex items-center  shadow-orange shadow-md  justify-center navbar font-semibold  py-6  bg-[#333333] text-[#F5F5F5]`}
    >
      <div className=" md:flex-row  md:justify-start justify-between flex-row-reverse">
        <div className="dropdown">
          <Burger
            opened={opened}
            onClick={open}
            aria-label="Toggle navigation"
            color={Colors.white}
            size={"md"}
            className="md:hidden "
          />

          <div className=" w-full">
            <Drawer
              position="top"
              size="md"
              // offset={8}
              overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
              opened={opened}
              onClose={close}
              styles={{
                // root: {
                //   border: "1px solid #ce2121", // Style the root element
                // },
                // inner: {
                //   backgroundColor: "#fff", // Style the element centering the drawer
                // },
                content: {
                  backgroundColor: Colors.bg, // Style the drawer content
                  // marginTop: "70px", // Add rounded corners to the drawer content
                },
                close: {
                  color: Colors.white,
                  fontSize: "24px", // Increase the size of the close button
                  width: "50px", // Adjust width if necessary
                  height: "50px",
                },
                header: {
                  // display: "none",
                  backgroundColor: "#333", // Style the header (title and close button container)
                  color: "#fff", // Make header text white
                  padding: "10px 0px", // Add padding to the header
                },
                title: {
                  fontSize: "1.5rem", // Style the drawer title
                },
                body: {
                  // padding: "20px", // Style the drawer body (content area)
                  backgroundColor: Colors.bg,
                  height: "100%",
                  color: "white",
                },
              }}
            >
              {/* <Drawer.Header>
                <Link href={"/"}>
                  {" "}
                  <Image
                    src={"/logo.png"}
                    alt="logo"
                    width={500}
                    height={500}
                    className="w-[40%] md:w-[40%]"
                  />
                </Link>
              </Drawer.Header> */}
              <div className=" w-full  h-full">
                <ul className="menu menu-vertical text-xl text-white font-bold md:text-base px-1">
                  <li>
                    <Link onClick={close} href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link onClick={close} href="/About">
                      About
                    </Link>
                  </li>
                  <li>
                    <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
                      <div tabIndex={0} role="button" className="">
                        Services
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-orange  text-bg z-[1] w-56 p-2 shadow"
                      >
                        <li>
                          <Link
                            onClick={close}
                            href={"/Services/Accounting-Services"}
                          >
                            Accounting Services
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={close}
                            href={"/Services/Inventory-Management-System"}
                          >
                            Inventory Management System
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={close}
                            href={"/Services/Sales-Analytics"}
                          >
                            Sales Analytics
                          </Link>
                        </li>
                        <li className="w-full">
                          <Link
                            onClick={close}
                            href={"/Services/Accounting-System"}
                          >
                            Accounting System
                          </Link>
                        </li>

                        <li className="w-full">
                          <Link
                            onClick={close}
                            href={"/Services/Business-Advisory"}
                          >
                            Business Advisory
                          </Link>
                        </li>
                        <li className="w-full">
                          <Link onClick={close} href={"/Services/Training"}>
                            Training
                          </Link>
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
                        className="dropdown-content menu bg-orange text-bg  z-[1] w-56 p-2 shadow"
                      >
                        <li>
                          <Link onClick={close} href={"/academy/data-entry"}>
                            Data Entry Academy
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={close}
                            href={"/academy/accounting-software-training"}
                          >
                            Accounting Software Training
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={close}
                            href={"/academy/property-management-system"}
                          >
                            Property Mgt. System in Hotels
                          </Link>
                        </li>
                        <li className="w-full">
                          <Link
                            onClick={close}
                            href={"/academy/hospitality-accounting-diploma"}
                          >
                            Diploma in Hospitality Accounting
                          </Link>
                        </li>

                        <li className="w-full">
                          <Link
                            onClick={close}
                            href={
                              "/academy/adv-diploma-in-hospitality-accounting"
                            }
                          >
                            Adv. Diploma in Hospitality Accounting
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link onClick={close} href="/Blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link onClick={close} href="/getInTouch">
                      Contact
                    </Link>
                  </li>
                </ul>

                <Button
                  rightSection={<IconArrowRight size={20} />}
                  variant="gradient"
                  // gradient={{ deg: 133, from: "pink", to: "black" }}
                  size="xl"
                  bg={Colors.blue}
                  radius="md"
                  mt="xs"
                  justify="space-between"
                  w={250}
                >
                  Get started
                </Button>
              </div>
            </Drawer>
          </div>
        </div>

        <Link href={"/"}>
          {" "}
          <Image
            src={"/logo.png"}
            alt="logo"
            width={500}
            height={500}
            className="w-[40%] md:w-[40%]"
          />
        </Link>
      </div>

      {/* desktop nav */}
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
                className="dropdown-content menu bg-orange text-bg mt-2 shadow-lg border-none  shadow-black z-[1] w-60 p-2 "
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
                className="dropdown-content menu bg-orange text-bg z-[1] w-56 p-2 shadow-lg mt-2"
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

      <div className="navbar-end md:flex hidden">
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
