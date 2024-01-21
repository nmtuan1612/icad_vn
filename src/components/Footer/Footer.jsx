import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <section
      className="w-full relative h-auto lg:h-screen transition-all bg-cover bg-no-repeat duration-1000 bg-[url('https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://icadvietnam.vn/wp-content/uploads/2021/09/Group_4.jpg')]"
      style={{ scrollSnapAlign: "center" }}
    >
      <div className="absolute bg-[#181818] opacity-50 top-0 left-0 right-0 bottom-0" />
      <div className="h-full w-full relative flex px-5 py-[60px] lg:py-12 flex-col text-white items-center justify-center z-[1000]">
        <div className="mb-5 block text-center">
          <Image
            src={
              "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_144,h_65/https://icadvietnam.vn/wp-content/uploads/2021/12/logo-moi-1.png"
            }
            alt=""
            width={144}
            height={0}
            sizes="100vw"
            className="h-auto object-cover"
          />
        </div>
        <h4 className="mb-5 text-[18px] md:text-3xl text-center text-white uppercase">
          CÔNG TY CP KIẾN TRÚC VÀ XÂY DỰNG <br /> ICAD VIỆT NAM
        </h4>
        <ul className="list-none text-[18px]">
          <li className="flex items-start md:items-center text-center justify-center mb-5 gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
            >
              <path
                fill="#df7527"
                d="M12 3c2.131 0 4 1.73 4 3.702 0 2.05-1.714 4.941-4 8.561-2.286-3.62-4-6.511-4-8.561 0-1.972 1.869-3.702 4-3.702zm0-2c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 6h-3.135c-.385.641-.798 1.309-1.232 2h3.131l.5 1h-4.264l-.344.544-.289.456h.558l.858 2h-7.488l.858-2h.479l-.289-.456-.343-.544h-2.042l-1.011-1h2.42c-.435-.691-.848-1.359-1.232-2h-3.135l-4 8h24l-4-8zm-12.794 6h-3.97l1.764-3.528 1.516 1.528h1.549l-.859 2zm8.808-2h3.75l1 2h-3.892l-.858-2z"
              />
            </svg>
            Tầng 1-164 Ngõ Xã Đàn 2 – Đống Đa – Hà Nội
          </li>
          <li className="flex items-start md:items-center text-center justify-center mb-5 gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
            >
              <path
                fill="#df7527"
                d="M6.176 1.322l2.844-1.322 4.041 7.89-2.724 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.862 3.591-19.103-18.258-11.385-22.281zm1.929 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398z"
              />
            </svg>
            (024)35 739 957 - 0983 141 283
          </li>
          <li className="flex items-start md:items-center text-center justify-center mb-5 gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
            >
              <path
                fill="#df7527"
                d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"
              />
            </svg>
            info@icadvietnam.vn
          </li>
        </ul>

        <div className="">
          <h5 className="text-center text-[18px] leading-9 uppercase text-[#df7527]">
            Đăng ký để nhận bản tin
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Footer;
