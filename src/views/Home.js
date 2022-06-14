// import React from 'react';
import './Home.css'
import Header from '../components/Header'

export default () => {

    return (
        <div className="background">
            <Header/>
            <div className="HomeCenter">
                <div className="HomeTop">
                    <form className="form">
                        <textarea className="input"/>
                    </form>
                </div>
                <div className="HomeBottom">
                    <ul>
                        <li>Items in list</li>
                        <li>Items in list</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

