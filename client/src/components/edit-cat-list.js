// List of Adoptable Cats Component

import React from 'react';
import { Link } from 'react-router-dom';

const EditList = ({ cats }) => {
    return (
        <div id='edit-list'>
            {cats &&
                cats.map((cat) => (
                    <div key={cat._id}>
                        <button id='list-button' ><Link className='list-text' to={`/edit/${cat._id}`}>{cat.name}</Link></button>
                        <br />
                    </div>
                ))}
        </div>
    );
};

export default EditList;