"use client"

import React, {useState,useEffect} from "react";
import Header from "@/Components/Header";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function page(){
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
    <div className=" h-1/2 w-1/2 mx-auto rounded-lg">
    <SyntaxHighlighter language="php" style={nord} >
          {code}
        </SyntaxHighlighter>
       <h1 className=" text-yellow-50"> [ hint: can i access your page ]</h1>
            </div>
      </>
    
    );
}