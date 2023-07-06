import React from "react";

import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    // <div className='flex justify-center w-full bg-[#252B42] md:py-5'>
    <div className="flex justify-center w-full bg-gray-900 md:py-5">
      <div className="text-center text-white flex flex-col items-center gap-x-64 py-10 gap-y-10 font-oranienbaum xl:flex-row">
        <div className="flex flex-col items-center md:flex-row">
          <Image
            className="mx-20 md:mx-0 md:mr-20 mb-5 md:mb-0"
            src="/assets/img/JGEC Logo.png"
            alt=""
            height={130}
            width={130}
          />
          <div className="flex px-10 md:p-0 flex-col items-center">
            <p className="text-[32px]">Pandulipi: The Magazine Club</p>
            <p className="text-[20px] pt-5 sm:pt-3">
              Jalpaiguri Government Engineering College
            </p>
          </div>
        </div>
        <div className="flex mb-5 gap-7 md:mr-7 mr-0">
          <div className=" cursor-pointer">
            <Link
              aria-label="facebook"
              href="https://www.facebook.com/mag.pandulipi.jgec/"
            >
              <Image
                src="/assets/icons/facebook-circle-logo-84.png"
                alt=""
                height={50}
                width={50}
              />
            </Link>
          </div>
          <div className=" cursor-pointer">
            <Link
              aria-label="instagram"
              href="https://www.instagram.com/pandulipiofficial/"
            >
              <Image
                src="/assets/icons/instagram-logo-84.png"
                alt=""
                height={50}
                width={50}
              />
            </Link>
          </div>
          <div className=" cursor-pointer">
            <Link
              aria-label="linkedin"
              href="https://www.linkedin.com/company/pandulipi/"
            >
              <Image
                src="/assets/icons/linkedin-square-logo-84.png"
                alt=""
                height={50}
                width={50}
              />
            </Link>
          </div>
          <div className=" cursor-pointer">
            <Link
              aria-label="youtube"
              href="https://www.youtube.com/@JGECDiaries"
            >
              <Image
                src="/assets/icons/youtube-logo-84.png"
                alt=""
                //
                height={50}
                width={50}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
