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
                        <img src={require(`../assets/cat-pics/${cat.image}`).default} alt={cat.image}></img>
                        <p>Click for details about <Link id='nav-text' to={`/${cat._id}`}>{cat.name}</Link></p><br />
                    </div>
                ))}
        </div>
    );
};

export default CatList;