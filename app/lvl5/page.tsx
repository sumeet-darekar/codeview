"use client"

import React, {useState,useEffect} from "react";
import Header from "@/Components/Header";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord  } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function page(){
    const code=`
    String query = "SELECT * FROM information WHERE id = ?";

    PreparedStatement pstmt = connection.prepareStatement(query, ... );

    pstmt.setString(1, request.getParameter("information"));

    ResultSet results = pstmt.executeQuery( );

    `
    return (
      <>
      <Header />
    <div className=" h-1/2 w-1/2 mx-auto rounded-lg">
    <SyntaxHighlighter language="javascript" style={nord } >
          {code}
        </SyntaxHighlighter>
       <h1 className=" text-yellow-50"> [ hint: admin id ]</h1>
            </div>
      </>
    
    );
}