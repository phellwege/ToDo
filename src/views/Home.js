// import React from 'react';
import React, { useEffect, useState } from 'react'
import './Home.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {ReactComponent as CheckBox} from '../static/icon-check.svg';
import {ReactComponent as Cross} from '../static/icon-cross.svg';



export default () => {
    function showSvg() {
        var i = 0;
        var col = document.getElementsByClassName('liSvg');
        for(i=0; i<col.length; i++) {
            col[i].style.visibility = 'visible';
        }
    };
    function hideSvg() {
        var i = 0;
        var col = document.getElementsByClassName('liSvg');
        for(i=0; i<col.length; i++) {
            col[i].style.visibility = 'hidden';
        }
    }
    
    function checkTheBox() {
        document.getElementById('CheckSvg').style.visibility = 'visible';
        let x = document.getElementById('this')
        if(x.style.textDecoration = 'initial') {
        x.style.textDecoration = 'line-through';
        x.style.color ='grey';
        } else {
            x.style.textDecoration = 'none';
        }
    }

const [listItem, setListItem] = useState('') 

    return (
        <div className="background">
            <Header/>
            <div className="HomeCenter">
                <div id="HomeTop">
                        TEXT HERE
                </div>
                <div className="HomeBottom">
                    <ul>
                        <li onMouseEnter={showSvg} onMouseLeave={hideSvg}>
                            <CheckBox className="liSvg" id='CheckSvg' onClick={checkTheBox}/>
                            <span id='this'>Items in list</span>
                            <Cross className="liSvg" id='CrossSvg'/>
                        </li>
                        <li onMouseEnter={showSvg} onMouseLeave={hideSvg}>
                            <CheckBox className="liSvg" id='CheckSvg' onClick={checkTheBox}/>
                            <span id='this'>Items in list</span>
                            <Cross className="liSvg" id='CrossSvg'/>
                        </li>
                        <li onMouseEnter={showSvg} onMouseLeave={hideSvg}>
                            <CheckBox className="liSvg" id='CheckSvg' onClick={checkTheBox}/>
                            <span id='this'>Items in list</span>
                            <Cross className="liSvg" id='CrossSvg'/>
                        </li>
                        
                        <div className="footerWrap">
                            (count)Items Left
                            <ul>
                                <li>all</li>
                                <li>active</li>
                                <li>completed</li>
                            </ul>
                            Clear Selected
                        </div>
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

