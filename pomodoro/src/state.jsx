import React from "react";
import { useState , useEffect } from "react";
import { createContext } from "react";

export const Content = createContext();
const State = ({children}) => { 
    const [pomotimemin , setpomotimemin] = useState(25 * 60);
    const [shorttime , setshorttime] = useState(5 * 60);
    const [longtime , setlongtime] = useState(30 * 60);

    const [inittime , setinittime] = useState(0)
 

    const [component , setcomponent] = useState(0);
    const [progress , setprogress] = useState(0);
    const [time , settime] = useState(10)
    const [activate,setactivate] = useState(false);
    
    useEffect (() => {
        switch(component) {
            case 0:
                settime(pomotimemin);
                setinittime(pomotimemin);
                break;
            case 1:
                settime(shorttime);   
                setinittime(shorttime);
                break;
            case 2:
                settime(longtime);
                setinittime(longtime);
                break ;
            default:
                break;        
        }
    },[component, pomotimemin , shorttime , longtime]) 
      
      return (
      <Content.Provider value={{component , setcomponent , progress , setprogress , time , settime , activate , setactivate, pomotimemin , setpomotimemin , shorttime , setshorttime , longtime , setlongtime , inittime , setinittime}}>
        {children}
        </Content.Provider>
      )
}

export default State;