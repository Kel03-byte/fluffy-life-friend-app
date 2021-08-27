// Home Page Component

import React, { Fragment } from 'react';
import './home.css';
import Img1 from '../../assets/images/1.jpg';
import Img2 from '../../assets/images/2.jpg';
import Img3 from '../../assets/images/3.jpg';
import Img4 from '../../assets/images/4.jpg';
import Img5 from '../../assets/images/icon.png';
import Img6 from '../../assets/images/6.jpg';

export default function Home() {
    return (
        <Fragment>
            <div id='home-page'>
                <div id='home-title'>Welcome!</div>
                <img id='home-pic-one' alt='cat lying on its back' src={Img1}></img>
                <img id='home-pic-two' alt='cat laying on lounge' src={Img2}></img>
                <img id='home-pic-three' alt='cat laying on bed' src={Img3}></img>
                <img id='home-pic-four' alt='three kittens on a cat scratcher' src={Img4}></img>
                <div id='home-text'>
                    <p>Here at Fluffy Friends, we believe that
                        our voiceless friends deserve a wonderful, healthy and happy life
                        and these adorable animals are a lifetime companion!</p>
                    <p>Ready for a lifetime of fun and uncondtional love then check out
                        some of our furry friends by clicking on "Cats"
                    </p>
                    <br />
                    <p>If you are a Cat Shelter Worker then you can log in or sign up to the site through the links above!</p>
                    <img id='home-pic-five' alt='black cat icon' src={Img5}></img>
                    <img id='home-pic-six' alt='cat lying on bed' src={Img6}></img>
                </div>
            </div>
        </Fragment>
    );
};