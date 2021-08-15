// Home Page Component

import React, { Fragment } from 'react';
import './home.css';
import Img1 from '../../assets/images/1.jpg';
import Img2 from '../../assets/images/2.jpg';
import Img3 from '../../assets/images/3.jpg';
import Img4 from '../../assets/images/4.jpg';

export default function Home() {
    return (
        <Fragment>
            <div id='home-page'>
                <div id='home-title'>Welcome!</div>
                <img id='home-pic-one' alt='cat lying on its back'src={Img1}></img>
                <img id='home-pic-two' alt='cat laying on lounge'src={Img2}></img>
                <img id='home-pic-three' alt='cat laying on bed'src={Img3}></img>
                <img id='home-pic-four' alt='three kittens on a cat scratcher'src={Img4}></img>
                <div id='home-text'>
                    <p>Here at Fluffy Life Friends, we believe that
                        our voiceless friends deserve a wonderful, healthy and happy life
                        and these adorable animals are a lifetime commitment!</p>
                    <p>If you ready for a lifetime of fun and uncondtional love then check
                        some of our furry friends we have available by clicking on "Cats"
                    </p>
                    <br />
                    <p>If you are a Cat Shelter Worker then you can log in or sign up to the site through the links above!</p>
                </div>
            </div>
        </Fragment>
    );
};