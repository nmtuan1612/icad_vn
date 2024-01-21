"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Thumbs,
  Navigation,
  Pagination,
  Parallax,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import BlogCard from "@/components/BlogCard/BlogCard";
import ProductCard from "@/components/ProductCard/ProductCard";

const images = [
  "https://icadvietnam.vn/wp-content/uploads/2022/12/Banner-website-2.jpg",
  "https://icadvietnam.vn/wp-content/uploads/2023/11/banner-web2.3.jpg",
  "https://icadvietnam.vn/wp-content/uploads/2023/11/banner-web-1-sua-scaled.jpg",
  "https://icadvietnam.vn/wp-content/uploads/2023/02/Anh-banner-website-compressed.jpg",
  "https://icadvietnam.vn/wp-content/uploads/2023/02/Anh-banner-website-1-compressed.jpg",
];
const brands = [
  "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_112,h_45/https://icadvietnam.vn/wp-content/uploads/2021/09/Logo_MISA.svg.png",
  "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_51,h_59/https://icadvietnam.vn/wp-content/uploads/2021/09/Asocio-Logo-17.png",
  "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_100,h_24/https://icadvietnam.vn/wp-content/uploads/2023/04/z4280519421731_6f49127bd9b232c07e43fa589ea369a3-e1681979227974.png",
  "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_100,h_21/https://icadvietnam.vn/wp-content/uploads/2022/03/viettel-logo-am-ban-e1681979732905.png",
  "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_83,h_48/https://icadvietnam.vn/wp-content/uploads/2021/09/logo-lavie-2020.png",
  "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_59,h_52/https://icadvietnam.vn/wp-content/uploads/2021/09/logofsoft.png",
  "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_63,h_64/https://icadvietnam.vn/wp-content/uploads/2021/09/01.png",
  "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_67,h_52/https://icadvietnam.vn/wp-content/uploads/2021/09/Layer_14.png",
];

const projectPage = () => {
  return (
    <div className="w-full h-full transition-all duration-1000">
      <div className="w-full h-[220px] md:h-[400px] relative lg:h-screen transition-all duration-1000">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={2000}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 210,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Parallax, Pagination, Thumbs]}
          className="h-full w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src={img}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="block h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute left-1/2 w-full -translate-x-1/2 max-w-7xl z-[1000] bottom-0">
          <div className="px-2.5 leading-[1.5]">
            <h1 className="px-2.5 text-[13px] md:text-[45px] font-thin text-white mb-1 uppercase">
              Văn phòng La vie
            </h1>
            <div className="mb-8 text-[10px] md:text-base text-gray-400 flex items-center">
              <Link href={"/"}>Trang chủ</Link>
              <div className="mx-1 lg:mx-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <span>Dự án</span>
              <div className="mx-1 lg:mx-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <span className="uppercase">Văn phòng La vie</span>
            </div>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="pt-15 pb-10 py-[60px] md:py-20 lg:pb-20 lg:pt-[115px] flex flex-col items-center">
        <div className="px-5 md:px-[60px] lg:px-2.5 w-full md:max-w-3xl lg:max-w-5xl">
          <div className="w-full max-w-[972px] text-[#333]">
            <h2 className="text-2xl block md:text-4xl font-thin uppercase lg:text-[45px] mb-4">
              Văn phòng La vie
            </h2>
            <div className="grid-cols-2 grid mb-10">
              <div className="col-span-2 md:col-span-1 py-5 mx-4 border-b">
                <h3 className="mb-4 text-[18px] text-[#666666] font-light relative pl-3 before:absolute before:w-1 before:h-1 before:bg-[#df7527] before:rounded-[50%] before:left-0 before:content-[''] before:top-2.5">
                  Diện tích
                </h3>
                <span className="text-[#333333] font-light text-base lg:text-[19px]">
                  320 m2
                </span>
              </div>
              <div className="col-span-2 md:col-span-1 py-5 mx-4 border-b">
                <h3 className="mb-4 text-[18px] text-[#666666] font-light relative pl-3 before:absolute before:w-1 before:h-1 before:bg-[#df7527] before:rounded-[50%] before:left-0 before:content-[''] before:top-2.5">
                  Địa chỉ
                </h3>
                <span className="text-[#333333] text-base font-light lg:text-[19px]">
                  Tòa C- Land - 156 ngõ Xã Đàn 2, Hà Nội
                </span>
              </div>
              <div className="col-span-2 md:col-span-1 py-5 mx-4 border-b">
                <h3 className="mb-4 text-[18px] text-[#666666] font-light relative pl-3 before:absolute before:w-1 before:h-1 before:bg-[#df7527] before:rounded-[50%] before:left-0 before:content-[''] before:top-2.5">
                  Phạm vi công việc
                </h3>
                <span className="text-[#333333] text-base font-light lg:text-[19px]">
                  Thiết kế & thi công
                </span>
              </div>
              <div className="col-span-2 md:col-span-1 py-5 mx-4 border-b">
                <h3 className="mb-4 text-[18px] text-[#666666] font-light relative pl-3 before:absolute before:w-1 before:h-1 before:bg-[#df7527] before:rounded-[50%] before:left-0 before:content-[''] before:top-2.5">
                  Năm hoàn thành
                </h3>
                <span className="text-[#333333] text-base font-light lg:text-[19px]">
                  2021
                </span>
              </div>
            </div>
            <div className="text-justify lg:text-[19px] text-[#333333]">
              <p className="mb-5">
                LaVie là thương hiệu đã quá quen thuộc trong tâm trí người Việt.
                Hình ảnh đại diện thương hiệu là một dòng suối mềm mại và tinh
                khiết giữa tự nhiên.
              </p>
              <p className="mb-5">
                Nhận nhiệm vụ thiết kế, để nhấn mạnh bản sắc thương hiệu,
                ICADVietnam đã biến toàn bộ 320m2 diện tích mặt bằng chuyển mình
                thành một không gian xanh với thiết kế Eco Office. Khu làm việc
                chung là một không gian mở với điểm nhấn là một đảo xanh với
                những đường cong mềm mại, lấy cảm hứng từ dòng suối thăm thẳm
                nơi núi rừng. Ngoài ra, chất liệu decor chủ yếu là cây xanh,
                phối hợp cùng những vật liệu thiên nhiên như sàn gỗ, sỏi, thảm
                cỏ tạo nên một không gian làm việc trong lành và thân thiện.
              </p>
              <p className="mb-5">
                Không dừng lại ở đó, thiết kế mang tới những đường cong bất định
                được sử dụng linh hoạt từ khu lễ tân cho tới không gian làm
                việc. Những khối tròn của bàn và ghế nội thất hoà hợp với tone
                màu trắng chủ đạo, ánh sáng tự nhiên từ khung cửa kính nhìn
                thẳng ra hồ Xã Đàn kết hợp với ánh sáng nhân tạo – tất cả tạo
                nên một nét tinh khiết đầy mê hoặc như chính thương hiệu La Vie
                vậy.
              </p>
              <p className="mb-5"></p>
              {/* <p className="mb-5">
                <iframe
                  // width={900}
                  // height={506}
                  src="https://www.youtube.com/embed/Xcq6DywEavk?si=_NWKqlHGMM6602xH"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="max-w-full w-full h-auto"
                />
              </p> */}
            </div>
          </div>
        </div>
      </div>

      <div className="pb-[100px] flex flex-col items-center">
        <div className="px-2.5 w-full md:max-w-[720px] lg:max-w-[1200px]">
          <h2 className="mb-5 text-[22px] font-thin text-center md:text-[40px] md:mb-9 uppercase">
            Các dự án khác
          </h2>
          <Swiper
            // install Swiper modules
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            slidesPerView={3}
            speed={2000}
            parallax={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={false}
            modules={[Autoplay, Navigation, Parallax, Thumbs]}
            className="w-full h-auto"
          >
            {brands.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="inline-flex w-full h-full items-center justify-center">
                  <ProductCard />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default projectPage;
