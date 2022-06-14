// import React from 'react';
import React, { useEffect, useState } from 'react'
import './Home.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {ReactComponent as CheckBox} from '../static/icon-check.svg';
import {ReactComponent as Cross} from '../static/icon-cross.svg';


export default () => {
    function showSvg() {
        document.getElementById('CheckSvg').style.visibility = 'visible';
        document.getElementById('CrossSvg').style.visibility = 'visible';
    }
    function hideSvg() {
        document.getElementById('CheckSvg').style.visibility = 'hidden';
        document.getElementById('CrossSvg').style.visibility = 'hidden';
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
const [isShown, setIsShown] = useState(false)
    return (
        <div className="background">
            <Header/>
            <div className="HomeCenter">
                <div id="HomeTop">
                    <p>TEXT HERE</p>
                </div>
                <div className="HomeBottom">
                    <ul>
                        <li onMouseEnter={showSvg} onMouseLeave={hideSvg}>
                            <CheckBox className="svg" id='CheckSvg' onClick={checkTheBox}/>
                            <span id='this'>Items in list</span>
                            <Cross className="svg" id='CrossSvg'/>
                        </li>
                        <li onMouseEnter={showSvg} onMouseLeave={hideSvg}>
                            <CheckBox className="svg" id='CheckSvg' onClick={checkTheBox}/>
                            <span id='this'>Items in list</span>
                            <Cross className="svg" id='CrossSvg'/>
                        </li>
                        <li onMouseEnter={showSvg} onMouseLeave={hideSvg}>
                            <CheckBox className="svg" id='CheckSvg' onClick={checkTheBox}/>
                            <span id='this'>Items in list</span>
                            <Cross className="svg" id='CrossSvg'/>
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

