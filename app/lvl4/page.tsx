"use client"

import React, {useState,useEffect} from "react";
import Header from "@/Components/Header";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Link from "next/link";

export default function page(){
    const [isOpen, setIsOpen] = useState(false);

    const togglePopdown = () => {
      setIsOpen(!isOpen);
    };
    const code=`
    var merge = function(target, source) {
        for(var attr in source) {
           if(typeof(target[attr]) === "object" && typeof(source[attr]) === "object")
             {
                merge(target[attr], source[attr]);
            } else {
                target[attr] = source[attr];
            }
        }
        return target;
    };
    `
    return (
      <>
      <Header />
    <div className=" h-1/2 w-1/2 mx-auto rounded-lg divtag">
    <SyntaxHighlighter language="javascript" style={nord} >
          {code}
        </SyntaxHighlighter>
       <h1 className=" text-yellow-50 py-4"> [ hint: ever heard of __proto__ ]</h1>
       <button onClick={togglePopdown} className=" bg-red-600 rounded px-1 py-1 font text-center my-2">Answer</button>
  
  {isOpen && (
<div className="popdown-content code rounded my-5">
  <pre className="font px-1 py-1 code-container"> This code is Vulnerable to javascript prototype pollution.<br /><br />
  For more info :
  <a href="https://youtu.be/LD-KcuKM_0M?si=OMSDk8lHa5X4ABrF" className=" bg-red-500 rounded">NullCon vedio </a><br />
    reference:
  <a href="https://medium.com/node-modules/what-is-prototype-pollution-and-why-is-it-such-a-big-deal-2dd8d89a93c" className=" bg-red-500 rounded">Medium article</a>
  
  </pre>
</div>
    
)}

<br />
<div className=" inline-flex">
      <Link href="lvl3" className=" bg-red-600 rounded px-1 py-1 font">← Back </Link>
      <br />
      <Link href="lvl5" className=" bg-red-600 rounded px-1 py-1 font mx-3.5">Next →</Link>
      <br />
      </div>
 
            </div>
      </>
    
    );
}