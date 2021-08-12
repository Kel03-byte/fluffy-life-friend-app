import React from 'react';
import { Link } from 'react-router-dom'

const CatList = ({cats}) => {
    return (
        <div>
        { cats &&
            cats.map((cat) => (
                <div key={cat._id}>
                    <p> Meet! {cat.name}</p>
                    <Link to={`/${cat._id}`}>
                    <button>Click!</button>
                    </Link>
                </div>
            ))}
    </div>
    )
}

export default CatList;