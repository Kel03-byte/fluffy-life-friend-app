// List of Adoptable Cats Component

import React from 'react';
import { Link } from 'react-router-dom';

const CatList = ({ cats }) => {
    return (
        <div id='cats-list'>
            {cats &&
                cats.map((cat) => (
                    <div key={cat._id}>
                        <p> Meet {cat.name}!</p>
                        <p>Click for details about <Link to={`/${cat._id}`}>{cat.name}</Link></p><br />
                    </div>
                ))}
        </div>
    );
};

export default CatList;