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
    <?php
    
    $file = $_GET[ 'page' ];

    $file = str_replace( array( "http://", "https://" ), "", $file );
    
    $file = str_replace( array( "../", "..\\" ), "", $file );

    ?>

    `
    return (
      <>
      <Header />
    <div className=" h-1/2 w-1/2 mx-auto rounded-lg divtag">
    <SyntaxHighlighter language="php" style={nord} >
          {code}
        </SyntaxHighlighter>
       <h1 className=" text-yellow-50 py-4"> [ hint: can i access your page ]</h1>

       <button onClick={togglePopdown} className=" bg-red-600 rounded px-1 py-1 font text-center my-2">Answer</button>
  
  {isOpen && (
<div className="popdown-content code rounded my-5">
  <pre className="font px-1 py-1 code-container">This Code is Vulnerable to LFI [local file inclusion].<br />
  By using [ ..../..../file or ..%2F..%2Ffile ]can get access to internal files.
    <br /><br />
  
  </pre>
</div>
    
)}
<br />
<div className=" inline-flex">
      <Link href="lvl1" className=" bg-red-600 rounded px-1 py-1 font">← Back </Link>
      <br />
      <Link href="lvl3" className=" bg-red-600 rounded px-1 py-1 font mx-3.5">Next →</Link>
      <br />
      </div>
            </div>
      </>
    
    );
}