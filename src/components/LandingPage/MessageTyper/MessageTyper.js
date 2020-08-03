import React,{useEffect} from 'react';

const messageTyper = (props) => {

    const msg = "Hello, I'm Anton and I develop stuff, keep scrolling ";
    let i=0;
  
   
    function typeEffect(){
        
        if(i<msg.length){
  
            document.getElementById("typing").innerHTML+=msg.charAt(i);
            i++;
            setTimeout(typeEffect,100);
        }        
    }
  
    useEffect(()=>{
      setTimeout(typeEffect,1000);
      
    },[])
  
    return(
        <div style={{padding:'0 10px'}}>
           <div>
                <font style={{color:'#0078D8'}}>&#60;Welcome </font>
                <font style={{color:'#2592AF'}}>className</font>=
                <font style={{color:'#F20519'}}>"Anton-Cristo"</font>
                <font style={{color:'#0078D8'}}>&#62;</font>
            </div>         
            <span id="typing" className="typing_span" >
           </span>
            <div style={{color:'#0078D8'}}>
                &#60;/Welcome&#62;
            </div>
            
        </div>
    );
  }

  export default messageTyper;