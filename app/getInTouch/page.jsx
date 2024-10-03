"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { poppins } from "@/utils/font/fonts";

// Dynamically import components to prevent server-side rendering issues
const GetInTouch = dynamic(() => import("@/components/contact"), {
  ssr: false,
});
const FAQSection = dynamic(() => import("@/components/faq"), { ssr: false });

const GetIntouch = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This ensures components relying on browser-specific features are only rendered on the client
    setIsClient(true);
  }, []);

  return (
    <div className={`${poppins.className}`}>
      <div
        className="w-full h-[400px] text-[#333333] flex flex-col gap-3 items-center justify-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(/contactPageBg.jpg)` }}
      >
        <h1 className="text-5xl font-medium">Get in Touch with Us</h1>
        <p className="text-lg text-[#F5F5F5]">
          We’re here to help your business thrive.
        </p>
      </div>

      <div className="w-full flex flex-col gap-8 py-8 px-20 h-full">
        <h1 className="text-3xl text-[#F5F5F5] font-semibold">
          Our Contact Information
        </h1>
        <div className="flex items-center gap-3">
          <div className="w-[50%]">
            <div className="flex text-[#F5F5F5] flex-col gap-8">
              <div>
                <h1 className="text-xl text-[#4169e1]">Address:</h1>
                <p className="text-sm">
                  Hogg Anderson Business Solutions Limited <br /> 2nd floor, 11
                  Ogundairo Street, Oworonsoki, Lagos
                </p>
              </div>

              <div>
                <h1 className="text-xl text-[#4169e1]">Phone:</h1>
                <p className="text-sm">+234 80 295 144 84</p>
              </div>

              <div>
                <h1 className="text-xl text-[#4169e1]">Email:</h1>
                <p className="text-sm">hoggandersonbiz@gmail.com</p>
              </div>

              <div>
                <h1 className="text-xl text-[#4169e1]">Working Hours:</h1>
                <p className="text-sm">
                  Monday – Friday: 9:00 AM – 6:00 PM <br />
                  Saturday: 10:00 AM – 2:00 PM <br /> Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {isClient && (
            <div className="w-[80%]">
              <iframe
                width="100%"
                height="400"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=11,%20Ogundiaro%20Street,%20Oworon%E1%B9%A3oki,%20Nigeria+(Hogg%20Anderson)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              />
            </div>
          )}
        </div>

        <div className="">
          <GetInTouch />
        </div>

        <FAQSection />
      </div>
    </div>
  );
};

export default GetIntouch;
