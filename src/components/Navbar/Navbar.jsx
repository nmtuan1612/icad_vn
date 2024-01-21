"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div
        className={`fixed top-0 bg-white opacity-100 z-[9999] h-[60px] lg:h-[120px] left-0 right-0 flex items-center justify-between pl-2.5 lg:pl-[40px] lg:pr-6 ${
          openMenu ? "lg:bg-white/90" : "lg:bg-transparent"
        }`}
      >
        {/* logo */}
        <div className="z-[1000]">
          <Link href={"/"} className="">
            <Image
              src={
                "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_157,h_70/https://icadvietnam.vn/wp-content/uploads/2022/11/logo-icad-chu-den-e1669200056945.png"
              }
              width={0}
              height={0}
              sizes="100vw"
              className="h-10 lg:hidden md:h-[50px] w-auto object-cover"
            />
            <Image
              src={
                "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_157,h_70/https://icadvietnam.vn/wp-content/uploads/2022/11/logo-icad-chu-trang-e1669200035210.png"
              }
              width={0}
              height={0}
              sizes="100vw"
              className="h-10 hidden lg:block md:h-[50px] lg:h-[70px] w-auto object-cover"
            />
          </Link>
        </div>

        {openMenu ? (
          <button
            className="text-[#e07622] lg:text-gray-500 w-11 lg:w-[60px] flex justify-center lg:hover:text-[#e07622]"
            onClick={() => setOpenMenu(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        ) : (
          <div className="text-[#e07622] lg:text-white flex items-center gap-2 justify-center">
            {/* <svg
              viewBox="0 0 26 26"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              className="lg:hover:text-[#e07622] cursor-pointer w-4 lg:w-6 h-4 lg:h-6"
            >
              <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
            </svg> */}

            <button
              className="w-11 lg:w-[60px] flex justify-center lg:hover:text-[#e07622]"
              onClick={() => setOpenMenu(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 lg:w-7 h-5 lg:h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        )}
        {/* Menu */}
        {openMenu && (
          <div className="absolute bg-white/90 top-full left-0 right-0 w-screen h-screen z-[100000]">
            <div
              className="absolute left-1/2 top-[5%] -translate-x-1/2 flex flex-col items-center text-gray-500"
              onClick={() => setOpenMenu(false)}
            >
              <Link
                href={"/"}
                className="mb-2.5 leading-[30px] uppercase text-[18px] lg:text-[26px] hover:text-[#e07622]"
              >
                Trang chủ
              </Link>
              <Link
                href={"/"}
                className="mb-2.5 leading-[30px] uppercase text-[18px] lg:text-[26px] hover:text-[#e07622]"
              >
                Giới thiệu
              </Link>
              <Link
                href={"/"}
                className="mb-2.5 leading-[30px] uppercase text-[18px] lg:text-[26px] hover:text-[#e07622]"
              >
                Dự án
              </Link>
              <Link
                href={"/"}
                className="mb-2.5 leading-[30px] uppercase text-[18px] lg:text-[26px] hover:text-[#e07622]"
              >
                Kiến thức
              </Link>
              <Link
                href={"/"}
                className="mb-2.5 leading-[30px] uppercase text-[18px] lg:text-[26px] hover:text-[#e07622]"
              >
                Tin tức
              </Link>
              <Link
                href={"/lien-he"}
                className="mb-2.5 leading-[30px] uppercase text-[18px] lg:text-[26px] hover:text-[#e07622]"
              >
                Liên hệ
              </Link>
            </div>
            <div className="absolute left-1/2 bottom-20 -translate-x-1/2 flex flex-col items-center text-gray-500">
              <h5 className="leading-10 mb-5 uppercase">Follow us</h5>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
