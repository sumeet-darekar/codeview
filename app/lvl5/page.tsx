"use client"

import React, {useState,useEffect} from "react";
import Header from "@/Components/Header";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord  } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Link from "next/link";
export default function page(){
  const [isOpen, setIsOpen] = useState(false);

  const togglePopdown = () => {
    setIsOpen(!isOpen);
  };
    const code=`
    String query = "SELECT * FROM information WHERE id = ?";

    PreparedStatement pstmt = connection.prepareStatement(query, ... );

    pstmt.setString(1, request.getParameter("information"));

    ResultSet results = pstmt.executeQuery( );

    `
    return (
      <>
      <Header />
    <div className=" h-1/2 w-1/2 mx-auto rounded-lg divtag">
    <SyntaxHighlighter language="javascript" style={nord } >
          {code}
        </SyntaxHighlighter>
       <h1 className=" text-yellow-50 py-4"> [ hint: admin id ]</h1>
       <button onClick={togglePopdown} className=" bg-red-600 rounded px-1 py-1 font text-center my-2">Answer</button>
  
          {isOpen && (
        <div className="popdown-content code rounded my-5">
          <pre className="font px-1 py-1 code-container">This Code is Vulnerable to IDOR [ Insecure Direct Object Reference ].<br />
          By changing id number which can lead to the access of another users details.
          <br /><br />  
          Solution:
          <br />It can be prevented by using proper authoriztion technics. 
          </pre>
        </div>
            
      )}

<br />
<div className=" inline-flex">
      <Link href="lvl4" className=" bg-red-600 rounded px-1 py-1 font">← Back </Link>
      <br />

      </div>
            </div>
      </>
    
    );
}