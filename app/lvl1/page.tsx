"use client"

import React, {useState,useEffect} from "react";
import Header from "@/Components/Header";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function page(){
  
  const [isOpen, setIsOpen] = useState(false);

  const togglePopdown = () => {
    setIsOpen(!isOpen);
  };
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
       <h1 className=" text-yellow-50 py-4"> [ hint: ' ]</h1>
          <button onClick={togglePopdown} className=" bg-red-600 rounded px-1 py-1 font text-center">Answer</button>
  
          {isOpen && (
        <div className="popdown-content code rounded my-5">
          <pre className="font px-1 py-1">This php code is Vulnerable to sql injection <br />
          here $_GET['id'] is directly inserted into the code without proper validation and <br />sanitization.<br />
          By using [ ' or 1=1 -- ]  we can get access to the database.
            <br /><br />
          Solution :<br />
          Use prepared statements instead of directly concatenating it into the query.
          </pre>
        </div>
            
      )}
            </div>
            
      </>
    
    );
}