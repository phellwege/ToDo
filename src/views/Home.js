// import React from 'react';
import './Home.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default () => {

    return (
        <div className="background">
            <Header/>
            <div className="HomeCenter">
                <div className="HomeTop">
                    <h3>TEXT HERE</h3>
                </div>
                <div className="HomeBottom">
                    <ul>
                        <li>Items in list</li>
                        <li>Items in list</li>
                        <li>Items in list</li>
                        <li>Items in list</li>
                        <li>Items in list</li>
                        <li>Items in list</li>
                        <li>Items in list</li>
                        <li>Items in list</li>
                        <li>Items in list</li>
                        <Footer/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

