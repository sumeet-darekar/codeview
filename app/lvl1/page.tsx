"use client"

import React, {useState,useEffect} from "react";
import Header from "@/Components/Header";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function page(){
    const code=`
    <?php

    $file_db = new PDO('<SQL CONNECTION>');
    
    if (NULL == $_GET['id']) $_GET['id'] = 1;

    $sql = 'SELECT * FROM employees WHERE employeeId = ' . $_GET['id'];
    
    foreach ($file_db->query($sql) as $row) {
        $employee = $row['LastName'] . " - " . $row['Email'] . "";
    
        echo $employee;
    }
    ?>

    `
    return (
      <>
      <Header />
    <div className=" h-1/2 w-1/2 mx-auto rounded-lg">
    <SyntaxHighlighter language="php" style={nord } >
          {code}
        </SyntaxHighlighter>
       <h1 className=" text-yellow-50"> [ hint: ' ]</h1>
            </div>
      </>
    
    );
}