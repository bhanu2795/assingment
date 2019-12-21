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

    _zoomIn = (image) => {
        const modal = document.getElementById('myModal');
        const modalImg = document.getElementById('img01');

        modal.style.display = 'block';
        modalImg.src = image;
    }

    _zoomOut = () => {
        const modal = document.getElementById('myModal');
        const modalImg = document.getElementById('img01');
        modalImg.className += ' ' + style.out;
        setTimeout(() => {
            modal.style.display = 'none';
            modalImg.className = style.modalContent;
        }, 400);
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
                        <div className={style.item}>
                            <img
                                style={{
                                    width: 'auto',
                                    height: '100%',
                                    cursor: 'pointer',
                                    marginLeft: '-50px',
                                }} src={dev1} alt="dev1" onClick={() => this._zoomIn(dev1)} />
                        </div>
                        <div className={style.item}>
                            <img
                                style={{
                                    width: 'auto',
                                    height: '100%',
                                    cursor: 'pointer',
                                    marginLeft: '-50px',
                                }} src={dev2} alt="dev2" onClick={() => this._zoomIn(dev2)} />
                        </div>
                        <div className={style.item}>
                            <img
                                style={{
                                    width: 'auto',
                                    height: '100%',
                                    cursor: 'pointer',
                                    marginLeft: '-50px',
                                }} src={dev3} alt="dev3" onClick={() => this._zoomIn(dev3)} />
                        </div>
                    </div>
                    <div id="myModal" className={style.modal}>
                        <img className={style.modalContent} id="img01" onClick={() => this._zoomOut()} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default hot(module)(Animation);
