"use client";
import config from "@/config/general";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mb-15">
      <div className="bg-grayBackground rounded-md">
        <div className="w-11/12 xl:w-[1050px] mx-auto flex md:flex-row flex-col justify-between md:gap-0 gap-12 items-start py-16">
          <div className="flex flex-col gap-2">
            {/* <Image
              src={"/logo.svg"}
              width={180}
              height={60}
              alt={config.title}
            /> */}
            <h1 className="text-3xl font-bold">meban</h1>
            <p className="w-[300px] text-activeButton">
              Unlock the full potential of your brand in the digital landscape.
            </p>
          </div>
          <div>
            <span className="uppercase text-[#8d8d8d] font-semibold">
              Links
            </span>
            <ul className="font-medium flex flex-col gap-2 mt-4 text-activeButton">
              <li>
                <a href="mailto:cmediatag@gmail.com">Email me!</a>
              </li>
              <li>
                <a href="tel:+2348074297255">Call or text me</a>
              </li>
              <li>
                <a href="https://www.instagram.com/cmediaofficial?igsh=MTgxMm0zNDAyd3pxaA==">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          {/* <div>
            <span className="uppercase text-[#8d8d8d] font-semibold">
              Legal
            </span>
            <ul className="font-medium flex flex-col gap-2 mt-4 text-activeButton">
              <li>Terms of services</li>
              <li>Privact policy</li>
            </ul>
          </div> */}
        </div>
        <div className="w-11/12 xl:w-[1050px] mx-auto pb-16">
          © 2024 -
          <Link href="/" passHref legacyBehavior>
            <span className="underline underline-offset-2 hover:cursor-pointer">
              meban
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
