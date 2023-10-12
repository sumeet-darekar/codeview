"use client"
import React, {useState,useEffect} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";

export default function header() {
  return (
    <>
      <div>
        <h1 className="font flex text-center justify-center size">Codeview</h1>
        <h1 className="font flex text-center justify-center normal-size">[ Find the Vulnerability in Code ]</h1>
      <div className="code h-1/2 w-1/2 mx-auto rounded">
       
      </div>
      </div>
      <div className=" back sidenav">
          <h1 className="font flex text-center justify-center beg">Beginner levels</h1>

         <Link href="/lvl1" className="font">Injection [ php ]</Link>
        <Link href="/lvl2"  className="font">filedump [ php ]</Link>
        <Link href="/lvl3"  className="font">alertme [ js ]</Link>
        <Link href="/lvl4"  className="font">polluteMe [ js ]</Link>
        <Link href="/lvl5"  className="font">It'sDoneOnlyResource</Link>
      </div>
    </>
  );
};




