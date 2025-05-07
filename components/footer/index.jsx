import {
  IconBrandFacebook,
  IconBrandGmail,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-[#4169E1] text-[#F5F5F5] p-10">
      <aside>
        <Image
          src={"/logo.png"}
          alt="logo"
          width={500}
          height={500}
          className="w-[40%]"
        />
        <p>
          Hogg Anderson Business Solutions Limited.
          <br />
          Expert accounting services.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link
          href={"/Services/Accounting-Services"}
          className="link-hover link"
        >
          Accounting Services
        </Link>
        <Link
          href={"/Services/Inventory-Management-System"}
          className="link link-hover"
        >
          Inventory Management
        </Link>
        <Link href={"/Services/Sales-Analytics"} className="link link-hover">
          Sales Analytics
        </Link>
        <Link href={"/Services/Business-Advisory"} className="link link-hover">
          Accounting System Solutions
        </Link>
        <Link href={"/Services/Training"} className="link link-hover">
          Training
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link href={"/academy/data-entry"} className="link link-hover">
          Academy
        </Link>
        <Link
          href={"/academy/accounting-software-training"}
          className="link link-hover"
        >
          Accounting Software
        </Link>
        <Link
          href={"/academy/property-management-system"}
          className="link link-hover"
        >
          Hotel Property Management
        </Link>
        <Link
          href={"/academy/hospitality-accounting-diploma"}
          className="link link-hover"
        >
          Hospitality Accounting
        </Link>
        <Link
          href={"/academy/adv-diploma-in-hospitality-accounting"}
          className="link link-hover"
        >
          Hotel Property Management
        </Link>{" "}
      </nav>
      <nav>
        <h6 className="footer-title">Socials</h6>

        <div className="flex space-x-3">
          <a target="_blank" href="https://www.facebook.com/share/1BsBK19MAc/">
            <IconBrandFacebook size={35} />
          </a>

          <a
            target="_blank"
            href="https://www.instagram.com/hoggsolution/profilecard/?igsh=MTY0Y28xazN3bmQ5Zg=="
          >
            <IconBrandInstagram size={35} />
          </a>

          <a href="mailto:hoggandersonbiz@gmail.com?subject=Inquiry&body=Hello,%0AI would like more information about your services.">
            <IconMail size={35} />
          </a>

          <a target="_blank" href={"https://wa.link/54pg2j"}>
            <IconBrandWhatsapp size={35} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
