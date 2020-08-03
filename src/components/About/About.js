import React,{useEffect} from 'react';
import './about.css';

const about = (props) => {

    useEffect(()=>{
        console.log('[About.js]');
    })

    return (
        <div className="about">
            <div>
                <p style={{display:props.display}} >
                My name is Anton Cristo, i'm a 28 years old  Web developer.<br/>
                In 2019, I've finished my B.Sc in 'Software Engineering'.<br/>
                Since then, i've started my next challenge, become a great UI developer.<br/>
                Now I'm looking for a junior position and a new team, and while I do that,<br/>
                I develop full-stack apps with React, Node.js and all my other friends.<br/>
                Thanks for checking out my page! <br/>
                </p>
            </div>
            <div>
                <div style={{display:props.display}} className="myimage" ></div>
            </div>
        </div>
    );
}

export default about;