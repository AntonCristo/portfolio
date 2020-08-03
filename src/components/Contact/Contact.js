import React from 'react';
import './contact.css';

const contact = () => {

    
    const RESUME_URL = 'https://firebasestorage.googleapis.com/v0/b/antoncristo-35c8e.appspot.com/o/resume.pdf?alt=media&token=6258800a-dbd4-4928-b1b0-89dbfc23fa24';
    const LINKEDIN_URL = 'https://www.linkedin.com/in/anton-cristo-157652153/';
    const GMAIL_URL = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=antoncristo92@gmail.com&su=subject%20';
    const GITHUB_URL = 'https://github.com/AntonCristo/';
    
    const onResumeClickedHandler = () => {
        window.open(RESUME_URL);
    }

    const copyToClipboard = (text) => {
        
        var dummy = document.createElement("input");
        document.body.appendChild(dummy);
        dummy.setAttribute('value', text);
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    }

    const onWhatsappClickedHandler = (text) => {
        copyToClipboard(text);
    }

    const onLinkedinClickedHandler = () => {
        window.open(LINKEDIN_URL,'linkedin')
    }

    const onGmailClickedHandler = () => {
        window.open(GMAIL_URL,'gmail');
    }
    
    const onGithubClickedHandler = () => {
        window.open(GITHUB_URL,'github');
    }

    return (
        <div className="contactwrapper">
            <div className="header">For more information, please contact me</div>
            <div 
                id="myresume" 
                className="resume"
                onClick={onResumeClickedHandler}>
            </div>
            <label style={{fontWeight:'bold'}} htmlFor="myresume">Resume</label>
            <div className="contactmedia" >
                <div onClick={onLinkedinClickedHandler} title="linkedin"></div>
                <div onClick={onGithubClickedHandler} title="github"></div>
                <div onClick={onGmailClickedHandler} title="gmail"></div>
                <div onClick={()=>onWhatsappClickedHandler("0543007046")} title="whatsapp"></div>
            </div>
        </div>
    );
}

export default contact;