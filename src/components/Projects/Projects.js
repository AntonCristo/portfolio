import React from 'react';
import './projects.css';

const projects = () => {

    const onSweetProjectClickedHandler = () => {
        window.open('https://sweetproject-6cff9.web.app/');
    }

    const onResidence26ClickedHandler = () => {
        window.open('https://residence26.herokuapp.com/');
    }

    return (
        <div className="container">
            <h1>Recent Projects</h1>
            <div className="wrapper">
                <div onClick={onSweetProjectClickedHandler} className="projectsweet" >
                    <div className="description" >
                        <h2 style={{margin:'0',textDecoration:'underline'}}>About the project</h2>
                        Business web app for a pastry chef.<br/>
                        React.js client, redux state manager, webpack bundler.
                        Firebase auth service real-time database & cloud storage.<br/>
                        REST API, React Hooks, css/scss.<br/><br/>
                        -click to visit-
                    </div>
                </div>
                <div onClick={onResidence26ClickedHandler} className="projectresidence" >
                    <div className="description" >
                        <h2 style={{margin:'0',textDecoration:'underline'}}>About the project</h2>
                        Apartment hotel staff management system.<br/>
                        React.js client, redux state manager, Node.js.
                        Firebase auth service real-time database & cloud storage.<br/>
                        Serverless API, React Hooks, css/scss.<br/><br/>
                        -click to visit-
                    </div>
                </div>
                
            </div>
        </div>
        
    );
}

export default projects;