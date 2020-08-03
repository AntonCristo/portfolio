import React,{useState} from 'react';
import './landingpage.css';
import Typer from './MessageTyper/MessageTyper';
import Projects from '../Projects/Projects';
import About from '../About/About';
import TechStack from '../TechStack/TechStack';
import Contact from '../Contact/Contact';

const landingPage = () => {

    const [showAboutOnScroll,setShowAboutOnScroll] = useState('none');

    const handleScroll = e => {
        const elementTopYPosition = e.target.scrollTop;
        const viewportSinglePageHeight = e.target.clientHeight;
        console.log(elementTopYPosition,e.target.scrollHeight,viewportSinglePageHeight);
        if(elementTopYPosition>(viewportSinglePageHeight*1.2)){
            setShowAboutOnScroll('block');
        }
        else{
            setShowAboutOnScroll('none');
        }
    }

    return (
        <div className="landingpage">
            <div onScroll={e => handleScroll(e)} className="main">
                <div className="welcome">
                    <Typer/>
                </div>
                <div className="projects" >
                    <Projects/>
                </div>
                <div className="about" >
                    <About display={showAboutOnScroll}/>
                </div>
                <div className="tech" >
                    <TechStack/>
                </div>
                <div className="contact">
                    <Contact/>
                </div>
            </div>
            <div className="boxes" >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default landingPage;