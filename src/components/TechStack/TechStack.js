import React from 'react';
import './techstack.css';
import TechItem from './TechItem/TechItem';
import reactjs from '../../assets/react.svg';
import redux from '../../assets/redux.svg';
import javascript from '../../assets/javascript.svg';
import css from '../../assets/css3.svg';
import firebase from '../../assets/firebase.svg';
import git from '../../assets/git.svg';
import html from '../../assets/html5.svg';
import nodejs from '../../assets/nodejs.svg';
import webpack from '../../assets/webpack.svg';
import visual from '../../assets/visual.svg';
import sass from '../../assets/sass.svg';

const techStack = () => {

    const techItems = [
        {title:'React.js',src:reactjs},
        {title:'Redux',src:redux},
        {title:'javascript',src:javascript},
        {title:'CSS',src:css},
        {title:'SCSS',src:sass},
        {title:'HTML',src:html},
        {title:'Node.js',src:nodejs},
        {title:'Firebase',src:firebase},
        {title:'Git',src:git},
        {title:'Webpack',src:webpack},
        {title:'Visual Studio Code',src:visual}




    ] 
    
    return (
        <div className="techstack">
            <h1>My Tech Stack</h1>
            <div className="stack" >
            {
                techItems.map((val,index)=>(<TechItem key={index+val.title} title={val.title} src={val.src} />))
            }

            </div>
        </div>
    );
}

export default techStack;