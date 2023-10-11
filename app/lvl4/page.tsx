"use client"

import React, {useState,useEffect} from "react";
import Header from "@/Components/Header";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function page(){
    const code=`
    var users = {
        "testuser":{
            "isAdmin":false,
            "name":"user1"
    },
        "admin":{
            "isAdmin":true,
            "name":"admin
    }
    }
    
    app.post('/vuln',(request,response) => {
        lodash.merge(users[request.body.user])
        if(users[request.body.user].isAdmin == true){
            response.send(<access granted>)
    }
        else{
            response(<don't have access>)
    }
    })
    `
    return (
      <>
      <Header />
    <div className=" h-1/2 w-1/2 mx-auto rounded-lg">
    <SyntaxHighlighter language="javascript" style={nord} >
          {code}
        </SyntaxHighlighter>
       <h1 className=" text-yellow-50"> [ hint: ever heard of lodash ]</h1>
            </div>
      </>
    
    );
}