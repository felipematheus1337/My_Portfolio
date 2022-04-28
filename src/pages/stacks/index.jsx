import React from 'react'
import { Backend, Container, Content, Database, Frontend, Icones } from './style'
import reactIcone from "../../../public/icones/react.svg";
import cssIcone from "../../../public/icones/css-3.svg";
import jsIcone from "../../../public/icones/javascript.svg";
import javaIcone from "../../../public/icones/java.svg";
import mysqlIcone from "../../../public/icones/mysql-icon.svg";
import nodeIcone from "../../../public/icones/nodejs.svg";
import mongoIcone from "../../../public/icones/mongodb.svg";
import htmlIcone from "../../../public/icones/html-5.svg";
import springIcone from "../../../public/icones/spring-icon.svg";
import awsIcone from "../../../public/icones/aws.svg";
import Image from 'next/image'

export default function Stacks() {
  return (
   
      <Icones>



       <Image
          src={springIcone} 
          alt="spring"
          height="60px"
          width="50px"
          />
          

       <Image
          src={nodeIcone} 
          alt="node"
          height="60px"
          width="50px"
          
          /> 

       <Image
          src={javaIcone} 
          alt="java"
          height="60px"
          width="50px"
          
          />

         
         <hr/>
        

        
       
        <Image
          src={reactIcone} 
          alt="react"
          width="50px"
          />
         
          <Image
          src={jsIcone} 
          alt="js"
          width="50px"
          />

          
          <Image
          src={htmlIcone} 
          alt="html"
          width="50px"
          />
         
         <Image
          src={cssIcone} 
          alt="css"
          width="50px"
          />

        


<hr/>
           
         <Image
          src={mysqlIcone} 
          alt="mysql"
          width="50px"
          />
        
        <Image
          src={mongoIcone} 
          alt="spring"
          width="70px"
          />
          <hr/>

        

        <Image
        src={awsIcone}
        alt="aws"
        height="20px"
        width="100px"
        
        />

       

          

          
         

         </Icones>



    
  )
}
