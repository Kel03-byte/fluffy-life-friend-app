// List of Adoptable Cats Component

import React from 'react';
import { Link } from 'react-router-dom';

const EditList = ({ cats }) => {
    return (
        <div id='edit-list'>
            {cats &&
                cats.map((cat) => (
                    <div key={cat._id}>
                        <p>{cat.name}!</p>
                        <p ><Link id='nav-text'to={`/edit/${cat._id}`}>Edit</Link> or Delete</p><br />
                    </div>
                ))}
        </div>
    );
};

export default EditList;