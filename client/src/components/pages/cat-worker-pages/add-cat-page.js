// Add A Cat Page Component

import React, { Fragment } from 'react';

export default function AddCat() {

    return (
        <Fragment>
            <div>Add A Cat Page!</div>
            <p>Name of Cat:</p>
            <p>DOB of Cat:</p>
            <p>Age of Cat:</p>
            <p>Sex of Cat:</p>
            <p>Is the Cat Shy or Social?</p>
            <p>Used to other Cats?</p>
            <p>Used to Dogs?</p>
            <p>Suitable for household with children under 8?</p>
            <p>Suitable for household with children between 8 and 13?</p>
            <p>Any other Special Requirements?</p>
            <p>Upload upto 4 pictures here! <button>Upload Images!</button></p>
            
            <button>Sign Out!</button>
         </Fragment>
    );
}