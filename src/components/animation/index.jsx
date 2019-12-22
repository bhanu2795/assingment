import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import dev1 from '../../assets/images/1.jpg';
import dev2 from '../../assets/images/2.png';
import dev3 from '../../assets/images/3.jpg';

import style from './style.scss';

class Animation extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _zoomIn = (e) => {
        const element = e.target.parentElement.nextSibling;
        console.log(element.getBoundingClientRect())
        element.style.visibility = 'visible';
        setTimeout(() => {
            element.style.transform = `translate(${(window.innerWidth / 2) - element.getBoundingClientRect().left}px, ${(window.innerHeight / 2) - element.getBoundingClientRect().top}px)`;
        }, 1000);

    }

    _zoomOut = (e) => {
        const element = e.target.parentElement;
        setTimeout(() => {
            element.style.visibility = 'hidden';
        }, 1000);
        element.style.transform = `translate(${(window.innerWidth / 2) - element.getBoundingClientRect().left}px, ${(window.innerHeight / 2) - element.getBoundingClientRect().top}px)`;
    }

    render = () => (
        <div className={style.container}>
            <div className={style.login_container}>
                <div className={style.form_login_container}>
                    <div className={style.bexchange_logo}>
                        <h3 className={style.headStyle}>Assignment</h3>
                    </div>
                    <h3 className={style.headStyle}>Welcome To Animation Component</h3>
                    <div className={style.bexchange_main_form}>
                        <div className={style.wrapper}>
                            <div className={style.item}>
                                <img className={style.animationImage} src={dev1} alt="dev1" onClick={this._zoomIn.bind(this)} />
                            </div>
                            <div className={style.test} style={{ visibility: 'hidden' }}>
                                <img className={style.animationImage} src={dev1} alt="dev1" onClick={this._zoomOut.bind(this)} />
                            </div>
                        </div>
                        <div className={style.wrapper}>
                            <div className={style.item}>
                                <img className={style.animationImage} src={dev2} alt="dev2" onClick={this._zoomIn.bind(this)} />
                            </div>
                            <div className={style.test} style={{ visibility: 'hidden' }}>
                                <img className={style.animationImage} src={dev2} alt="dev2" onClick={this._zoomOut.bind(this)} />
                            </div>
                        </div>
                        <div className={style.wrapper}>
                            <div className={style.item}>
                                <img className={style.animationImage} src={dev3} alt="dev3" onClick={this._zoomIn.bind(this)} />
                            </div>
                            <div className={style.test} style={{ visibility: 'hidden' }}>
                                <img className={style.animationImage} src={dev3} alt="dev3" onClick={this._zoomOut.bind(this)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default hot(module)(Animation);
