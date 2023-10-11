"use client"

import React, {useState,useEffect} from "react";
import Header from "@/Components/Header";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function page(){
    const code=`
        <div class="">
            <label for=search">Search</label>
            <input type="text" class="" id="search" name="search">
        </div>
        <input type="submit" id="submit" class="button" value="Search">
        <br><br>
        <div class="<%=alertVisibility%">
            cannot find '<%=request.getParameter("search")%>'
        <div>
    `
    return (
      <>
      <Header />
    <div className=" h-1/2 w-1/2 mx-auto rounded-lg">
    <SyntaxHighlighter language="javascript" style={nord} >
          {code}
        </SyntaxHighlighter>
       <h1 className=" text-yellow-50"> [ hint: alert ]</h1>
       
            </div>
      </>
    
    );
}