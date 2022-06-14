// import React from 'react';
import './Home.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {ReactComponent as CheckBox} from '../static/icon-check.svg';
import {ReactComponent as Cross} from '../static/icon-cross.svg';
export default () => {

    return (
        <div className="background">
            <Header/>
            <div className="HomeCenter">
                <div id="HomeTop">
                    <p>TEXT HERE</p>
                </div>
                <div className="HomeBottom">
                    <ul>
                        <li><CheckBox className="svg"/>Items in list<Cross/></li>
                        <li><CheckBox className="svg"/>Items in list<Cross/></li>
                        <li><CheckBox className="svg"/>Items in list<Cross/></li>
                        <li><CheckBox className="svg"/>Items in list<Cross/></li>
                        <li><CheckBox className="svg"/>Items in list<Cross/></li>
                        <li><CheckBox className="svg"/>Items in list<Cross/></li>
                        <li><CheckBox className="svg"/>Items in list<Cross/></li>
                        <li><CheckBox className="svg"/>Items in list<Cross/></li>
                        <li><CheckBox className="svg"/>Items in list<Cross/></li>
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

