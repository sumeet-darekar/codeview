"use client"

import React, {useState,useEffect} from "react";
import Header from "@/Components/Header";

export default function page(){
    return (
      <>
      <Header />
      <div className="h-1/2 w-1/2 mx-auto rounded-lg code py-10">
            <h1 className="font text-center py-2"> Codeview is design to help students to get started in finding Vulnerabilities in code.</h1>
          <br />
          <h1 className="font text-left px-2">Resources to get started :</h1>
        <br />
          <a href="https://owasp.org/www-pdf-archive/OWASP_Code_Review_Guide_v2.pdf" target="blank" className="font px-10">&#9889; owasp code review guide [v2]</a><br />
          <a href="https://medium.com/@paul_io/security-code-review-101-a3c593dc6854" target="blank" className="font px-10">&#9989; paul Ionescu's articles</a><br />
          <a href="https://github.com/digininja/DVWA/tree/master/vulnerabilities" target="blank" className="font px-10">&#129312; DVWA vulnerable codes</a><br />
          <a href="https://github.com/yeswehack/vulnerable-code-snippets" target="blank" className="font px-10">&#129488; yeswehack's code snippets</a><br />
          <a href="https://rules.sonarsource.com/java/type/Vulnerability/RSPEC-5131/" target="blank" className="font px-10">&#129313; sonar rules</a><br />
          <a href="https://www.youtube.com/live/fb-t3WWHsMQ?si=TvDxm3WNS2SgD9rJ" target="blank" className="font px-10">&#128187; shubham shah [ youtube ]</a><br />
          <a href="https://www.youtube.com/live/A8CNysN-lOM?si=MKf8Q95nG85Povl5" target="blank" className="font px-10">&#128214; vickie li [ youtube ]</a><br />
          <a href="https://www.youtube.com/watch?v=GmWQ1VIjd2U&list=PLHUKi1UlEgOJLPSFZaFKMoexpM6qhOb4Q" target="blank" className="font px-10">🐱Cryptocat's dvwa playlist [ youtube ]</a>
          <br />
          <br />
          <br />
          <h1 className="font px-4">Connect with me :</h1>
          <a href="https://www.linkedin.com/in/sumeet-darekar-07569a1b4/" className="font px-4">&#128526; linkedin</a>
      
      </div>
      
      </>
    );
}