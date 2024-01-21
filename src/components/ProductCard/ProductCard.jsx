"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = () => {
  return (
    <div className="px-2.5 w-full pb-5 relative">
      <Link href={"/project/misa"} className="mb-5 block overflow-hidden">
        <Image
          src={
            "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_380,h_250/https://icadvietnam.vn/wp-content/uploads/2021/09/DSC_2643-HDR-2-1024x700-1.jpg"
          }
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </Link>
      <div className="w-full">
        {/* <h3 className="mt-4 mb-5 uppercase leading-6 text-xl font-light">
          Đầu tư cho văn phòng sáng tạo là sự đầu tư không bao giờ lỗ!
        </h3> */}
        <h3 className="mt-4 mb-5 uppercase leading-6 text-xl font-light text-ellipsis overflow-hidden line-clamp-2 h-[54px]">
          Văn phòng Misa
        </h3>

        <Link
          href={"/blog/bi-kip-tao-dang-chup-hinh-cho-nam-dep"}
          className="text-[#df7527] font-thin flex gap-2 items-center"
        >
          Xem thêm
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
