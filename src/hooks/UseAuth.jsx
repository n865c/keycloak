import React from 'react'
import { useState } from 'react';
import Protected from '../components/protected';
import Public from '../components/public';
const UseAuth = () => {
    const [login,setLogin]=useState(false);
  return login ?<Protected/>:<Public/>;
}
export default UseAuth
