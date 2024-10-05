import Image from "next/image";
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
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
