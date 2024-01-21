import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "@/components/Footer/Footer";

const ContactPage = () => {
  return (
    <div className="w-full min-h-screen transition-all duration-1000">
      <div className="w-full h-auto relative transition-all duration-1000">
        <Image
          src={
            "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://icadvietnam.vn/wp-content/uploads/2023/01/Anh-banner-website-ICADVietnam-2.png"
          }
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="block h-auto w-full object-cover"
        />

        <div className="absolute left-1/2 w-full -translate-x-1/2 max-w-7xl z-[1000] bottom-0">
          <div className="px-2.5 leading-[1.5]">
            <h1 className="text-[13px] md:text-[45px] font-thin text-white mb-1 uppercase">
              Liên hệ
            </h1>
            <div className="mb-8 text-[10px] md:text-base text-[#c5c5c5] flex items-center">
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
              <span>Liên hệ</span>
            </div>
          </div>
        </div>

        <div className="absolute bg-[#181818] opacity-40 top-0 left-0 right-0 bottom-0" />
      </div>
      {/* content */}
      <div className="pt-15 pb-10 py-[60px] md:py-20 lg:pb-20 lg:pt-[115px] flex flex-col items-center">
        <div className="px-5 md:px-[60px] lg:px-2.5 w-full md:max-w-3xl lg:max-w-5xl">
          <div className="w-full max-w-[972px] text-[#333]">
            <div className="w-full text-center">
              <h2 className="text-2xl block leading-[140%] font-thin uppercase md:text-[45px] mb-4">
                GỬI TIN NHẮN CHO CHÚNG TÔI
              </h2>
              <div className="md:text-[18px] mb-10 font-light">
                ICADVietnam sẵn sàng lắng nghe và giải đáp thắc mắc của bạn!
              </div>
            </div>
            <div className="grid-cols-2 grid mb-10">
              <div className="col-span-2 md:col-span-1 px-2.5">
                <label className="text-[#333] block font-light mb-2.5">
                  Họ và tên
                </label>
                <input
                  type="text"
                  placeholder="Nguyen Van A"
                  className="text-[#666] font-light px-4 py-2.5 mb-5 border w-full"
                />
              </div>
              <div className="col-span-2 md:col-span-1 px-2.5">
                <label className="text-[#333] block font-light mb-2.5">
                  Chức vụ/Đơn vị công tác
                </label>
                <input
                  type="text"
                  placeholder="Nhập chức vụ/đơn vị công tác của bạn..."
                  className="text-[#666] font-light px-4 py-2.5 mb-5 border w-full"
                />
              </div>
              <div className="col-span-2 md:col-span-1 px-2.5">
                <label className="text-[#333] block font-light mb-2.5">
                  Email liên hệ
                </label>
                <input
                  type="text"
                  placeholder="abc@gmail.com"
                  className="text-[#666] font-light px-4 py-2.5 mb-5 border w-full"
                />
              </div>
              <div className="col-span-2 md:col-span-1 px-2.5">
                <label className="text-[#333] block font-light mb-2.5">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  placeholder="09xx xxx xxx"
                  className="text-[#666] font-light px-4 py-2.5 mb-5 border w-full"
                />
              </div>
              <div className="col-span-2 md:col-span-1 px-2.5">
                <label className="text-[#333] block font-light mb-2.5">
                  Sử dụng dịch vụ
                </label>
                <input
                  type="text"
                  placeholder="Văn phòng sáng tạo"
                  className="text-[#666] font-light px-4 py-2.5 mb-5 border w-full"
                />
              </div>
              <div className="col-span-2 md:col-span-1 px-2.5">
                <label className="text-[#333] block font-light mb-2.5">
                  Bạn biết đến ICADVietnam từ đâu?
                </label>
                <input
                  type="text"
                  placeholder="Nhập kênh mà bạn biết đến ICADVietnam..."
                  className="text-[#666] font-light px-4 py-2.5 mb-5 border w-full"
                />
              </div>
              <div className="col-span-2 px-2.5 flex justify-center">
                <input
                  type="text"
                  placeholder="GỬI NGAY"
                  className="mt-[30px] h-[50px] bg-no-repeat cursor-pointer inline-flex placeholder-[#d16e26] text-center items-center justify-center text-[18px] w-[259px] bg-[url('https://icadvietnam.vn/wp-content/themes/thuythu/images/border_button@2x.png')]"
                  style={{
                    backgroundSize: "100% 100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
