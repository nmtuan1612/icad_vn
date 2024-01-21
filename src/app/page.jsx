"use client";
import BlogCard from "@/components/BlogCard/BlogCard";
import ProductCard from "@/components/ProductCard/ProductCard";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Pagination, Parallax, Autoplay } from "swiper/modules";
import Footer from "@/components/Footer/Footer";

const images = [
  "https://icadvietnam.vn/wp-content/uploads/2022/12/Banner-website-2.jpg",
  "https://icadvietnam.vn/wp-content/uploads/2023/11/banner-web2.3.jpg",
  "https://icadvietnam.vn/wp-content/uploads/2023/11/banner-web-1-sua-scaled.jpg",
  "https://icadvietnam.vn/wp-content/uploads/2023/02/Anh-banner-website-compressed.jpg",
  "https://icadvietnam.vn/wp-content/uploads/2023/02/Anh-banner-website-1-compressed.jpg",
];

const images2 = [
  "https://icadvietnam.vn/wp-content/uploads/2023/01/Anh-banner-website-ICADVietnam-compressed-1-1.jpg",
  "https://icadvietnam.vn/wp-content/uploads/2023/01/Anh-banner-website-ICADVietnam-3-compressed.jpg",
  "https://icadvietnam.vn/wp-content/uploads/2023/02/Anh-banner-website-ICADVietnam-compressed.jpg",
  "https://icadvietnam.vn/wp-content/uploads/2023/01/Anh-banner-website-ICADVietnam-1-compressed-1.jpg",
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

export default function Home() {
  return (
    <div
      className="w-full h-screen overflow-y-scroll transition-all duration-1000"
      style={{ scrollSnapType: "y mandatory" }}
    >
      {/* hero */}
      {/* <div className="max-w-[1480px]"> */}
      <section
        className="w-full md:h-[600px] h-[250px] lg:h-screen transition-all duration-1000"
        style={{ scrollSnapAlign: "center" }}
      >
        <Swiper
          // install Swiper modules
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
          className="lg:h-screen w-full h-full"
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
      </section>
      {/*  */}
      <section
        className="w-full md:h-[600px] h-[250px] lg:h-screen relative transition-all duration-1000"
        style={{ scrollSnapAlign: "center" }}
      >
        <Swiper
          // install Swiper modules
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Parallax, Pagination, Thumbs]}
          className="lg:h-screen w-full h-full"
        >
          {images2.map((img, index) => (
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
        <div className="absolute left-0 right-0 md:translate-y-0 flex h-auto items-center justify-center z-[1000] md:bottom-16 top-1/2 -translate-y-1/2 flex-col md:flex-row md:top-auto">
          {/* <div className="flex items-center w-max justify-center flex-col lg:flex-row"> */}
          <Link
            href={""}
            className="uppercase border border-white text-white mx-4 text-[10px] md:text-xs lg:text-base p-0.5 px-4 md:py-2 mb-2 w-[194px] md:w-auto flex justify-center items-center"
          >
            Văn phòng sáng tạo
          </Link>
          <Link
            href={""}
            className="uppercase border border-white text-white mx-4 text-[10px] md:text-xs lg:text-base p-0.5 px-4 md:py-2 mb-2 w-[194px] md:w-auto flex justify-center items-center"
          >
            Biệt thự tư gia
          </Link>
          <Link
            href={""}
            className="uppercase border border-white text-white mx-4 text-[10px] md:text-xs lg:text-base p-0.5 px-4 md:py-2 mb-2 w-[194px] md:w-auto flex justify-center items-center"
          >
            Nhà hàng/showroom
          </Link>
          <Link
            href={""}
            className="uppercase border border-white text-white mx-4 text-[10px] md:text-xs lg:text-base p-0.5 px-4 md:py-2 mb-2 w-[194px] md:w-auto flex justify-center items-center"
          >
            Quần thể golf 3d
          </Link>
          {/* </div> */}
        </div>
      </section>

      {/*  */}
      <section
        className="w-full h-[400px] md:h-[500px] lg:h-screen relative transition-all duration-1000 bg-cover bg-no-repeat bg-[url('https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://icadvietnam.vn/wp-content/uploads/2023/02/Anh-banner-website-ICADVietnam-1.png')]"
        style={{ scrollSnapAlign: "center" }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 text-center w-full z-[1000]">
          <div className="mx-9 text-white inline-block">
            <span className="font-black text-[37px] md:text-[80px] lg:text-[100px]">
              150+
            </span>
            <h4 className="text-center mb-5 text-xl md:text-[40px] lg:text-5xl">
              Dự án
            </h4>
          </div>
          <div className="mx-9 text-white inline-block">
            <span className="font-black text-[37px] md:text-[80px] lg:text-[100px]">
              15.000+
            </span>
            <h4 className="text-center mb-5 text-xl md:text-[40px] lg:text-5xl">
              m² mặt bằng
            </h4>
          </div>
        </div>
        <div className="absolute bottom-11 w-[80%] left-1/2 -translate-x-1/2 z-[1000]">
          <Swiper
            // install Swiper modules
            breakpoints={{
              0: {
                slidesPerView: 3,
              },
              768: {
                // width: 768,
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 8,
              },
            }}
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            speed={1600}
            parallax={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Parallax, Thumbs]}
            className="w-full h-24"
          >
            {brands.map((img, index) => (
              <SwiperSlide key={index}>
                <Link
                  href={"/project/misa"}
                  className="inline-flex w-full h-full hover:border-2 border-white rounded-lg  items-center justify-center"
                >
                  <Image
                    src={img}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-auto min-w-[40%] object-cover"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="absolute bg-black opacity-50 top-0 left-0 right-0 bottom-0" />
      </section>

      <section
        className="w-full lg:h-screen transition-all duration-1000"
        style={{ scrollSnapAlign: "center" }}
      >
        <div className="flex flex-col w-full py-[60px] md:px-[60px] lg:px-[110px] lg:h-full items-center justify-center">
          <h2 className="text-2xl md:text-[40px] lg:text-5xl uppercase mb-[30px] md:mb-10">
            Báo chí nói gì về icad việt nam
          </h2>
          <Swiper
            // install Swiper modules
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
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
            modules={[Autoplay, Parallax, Thumbs]}
            className="w-full h-auto"
          >
            {brands.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="inline-flex w-full h-full items-center justify-center">
                  <BlogCard />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <Footer />
    </div>
  );
}
