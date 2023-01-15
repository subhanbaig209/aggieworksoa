import React, { useState } from 'react';
import { FaGithub, FaQuestion } from 'react-icons/fa';

interface Props {}

const Header: React.FC<Props> = () => {
    return (
        <div className="header" style={{ backgroundColor: 'AliceBlue', display: 'flex', justifyContent: 'center', alignItems: 'center', height:'175px', flexDirection: 'column'}}>
            <h1 style={{color: 'black'}}>Subhan's AggieWorks Take Home Assessment</h1>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <a href="https://github.com/subhanbaig209" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon"  style={{ fontSize: '50px', color: 'black', margin: '0 10px'}} />
                </a>
                <a href="https://www.boredapi.com/documentation" target="_blank" rel="noopener noreferrer">
                    <FaQuestion className="icon"  style={{ fontSize: '50px', color: 'black', margin: '0 10px'}}/>
                </a>
            </div>
        </div>
    );
}

export default Header;