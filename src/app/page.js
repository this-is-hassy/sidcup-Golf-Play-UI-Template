"use client";
import Image from "next/image";
import React from "react";
import styles from "./dynamic.module.css";
import { useRef, useEffect } from "react";

export default function Home() {
  const cursorRef = useRef(null);
  const blurRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current && blurRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
        blurRef.current.style.left = e.clientX - 300 + "px";
        blurRef.current.style.top = e.clientY - 300 + "px";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <nav className="w-full flex justify-start items-center px-32 gap-8 text-white font-semibold text-lg fixed z-50 top-5 ">
        <Image src="/logo.png" alt="logo" width={100} height={100}></Image>
        <a
          href="#"
          className="hover:text-[#98c717] transform hover:scale-110 duration-200 ease-linear"
        >
          TOPTRACER RANGE
        </a>
        <a
          href="#"
          className="hover:text-[#98c717] transform hover:scale-110 duration-200 ease-linear"
        >
          GOLF LESSONS
        </a>
        <a
          href="#"
          className="hover:text-[#98c717] transform hover:scale-110 duration-200 ease-linear"
        >
          ADVENTURE GOLF
        </a>
        <a
          href="#"
          className="hover:text-[#98c717] transform hover:scale-110 duration-200 ease-linear"
        >
          COFFEE SHOP
        </a>
        <a
          href="#"
          className="hover:text-[#98c717] transform hover:scale-110 duration-200 ease-linear"
        >
          LEAGUES
        </a>
      </nav>

      <div>
        {/* Your cursor content */}
        <div
          className=" h-6 w-6 bg-[#95C11E] rounded-full fixed z-50 ease-linear duration-150"
          ref={cursorRef}
          id="cursor"
        ></div>
        {/* Your blur content */}
        <div
          className=" h-[300px] w-[300px] bg-[#98c717] rounded-full fixed blur-[150px] -z-30 duration-100 ease-linear  "
          ref={blurRef}
        ></div>
      </div>

      <video
        autoPlay
        loop
        muted
        className="-z-50 h-screen w-full fixed object-cover"
        src={require("../../public/mainVideo.mp4")}
      />
      <div className="-z-40 h-screen  w-full bg-black bg-opacity-30">
        <div className="relative text-white flex items-center justify-center flex-col w-screen h-screen z-40 text-center pt-20">
          <div className={styles.double_head}>
            <h1 className="relative text-9xl font-extrabold text-white before:content-[attr(before)] before:absolute before:-z-20 before:text-black before:-top-[5px] before:-left-[5px] before:text-9xl before:font-extrabold ">
              EAT. DRINK. PLAY.
            </h1>
          </div>

          <h2 className="font-extrabold text-3xl mt-4">
            WELCOME TO SIDCUP FAMILY GOLF!
          </h2>
          <p className="text-lg font-semibold w-3/5 mt-4">
            Sidcup Family Golf is a multipurpose golf facility located in
            Sidcup, South East London. Passionate about technology, player
            development and making golf fun and accessible to everyone.
          </p>
        </div>
      </div>
    </>
  );
}
