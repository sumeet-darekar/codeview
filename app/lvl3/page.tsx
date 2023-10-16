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
  const payload =`
  <img src=z onerror=alert(document.domain)>
  `
    const code=`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Vulnerable Page</title>
    </head>
    <body>
        <h1>Search Results</h1>
        <p>You searched for: <?php echo $_GET['search']; ?></p>
    </body>
    </html>
    
    `
    return (
      <>
      <Header />
    <div className=" h-1/2 w-1/2 mx-auto rounded-lg divtag">
    <SyntaxHighlighter language="javascript" style={nord} >
          {code}
        </SyntaxHighlighter>
       <h1 className=" text-yellow-50 py-4"> [ hint: alert ]</h1>
       
       <button onClick={togglePopdown} className=" bg-red-600 rounded px-1 py-1 font text-center my-2">Answer</button>
  
          {isOpen && (
        <div className="popdown-content code rounded my-5">
          <pre className="font px-1 py-1 code-container">This code is Vulnerable to xss [cross side scripting] attack.<br />
          By injecting this [ {payload} ] and poping the alert on screen it can confirm that this input function can run <br />javascript.

          <br /><br />
          Solution:<br />
          Use encoding on the user supplied input.   
          </pre>
        </div>
            
      )}

<br />
<div className=" inline-flex">
      <Link href="lvl2" className=" bg-red-600 rounded px-1 py-1 font">← Back </Link>
      <br />
      <Link href="lvl4" className=" bg-red-600 rounded px-1 py-1 font mx-3.5">Next →</Link>
      <br />
      </div>
            </div>
      </>
    
    );
}