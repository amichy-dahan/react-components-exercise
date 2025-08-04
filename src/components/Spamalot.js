import Spam from "./Spam";
import React, { Component } from 'react';


const Spamalot =()=>{
  let arr = []
 for (let index = 0; index < 500; index++) {
       arr.push(<Spam/>)
 }
return arr;
}

export default Spamalot

