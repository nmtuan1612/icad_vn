"use client";
import Image from "next/image";
import React from "react";
// import zaloImg from "/images/zalo_img.png";
// import callImg from "/images/phone_img.png";

const ButtonContact = () => {
  return (
    <div className="list__button-contact z-[999999]">
      <div className="button__contact">
        <div className="icon__vr">
          <div
            className="circle__filled"
            style={{
              boxShadow: "0 0 0 0 #258be1",
              backgroundColor: "#2196f3b2",
            }}
          >
            <div
              className="image__circle"
              style={{ backgroundColor: "#258be1" }}
            >
              <a target="_blank" href="https://zalo.me/0989487056">
                <Image
                  src={"/images/zalo_img.png"}
                  alt="icon"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-auto object-cover"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="button__contact">
        <div className="icon__vr">
          <div
            className="circle__filled"
            style={{
              boxShadow: "0 0 0 0 rgba(221, 153, 51, 0.7)",
              backgroundColor: "rgba(221, 153, 51, 0.7)",
            }}
          >
            <div
              className="image__circle"
              style={{ backgroundColor: "rgb(221, 153, 51)" }}
            >
              <a href="tel:0869555598">
                <Image
                  src={"/images/phone_img.png"}
                  alt="icon"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-auto object-cover"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonContact;
