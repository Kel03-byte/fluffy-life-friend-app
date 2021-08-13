// Home Page Component

import React, { Fragment } from 'react';
import './home.css'

export default function Home() {
    return (
        <Fragment>
            <div id='home-page'>
                <div id='home-title'>Welcome!</div>
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