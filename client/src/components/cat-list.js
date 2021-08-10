import React from 'react';

const CatList = ({cats}) => {
    return (
        <div>
        { cats &&
            cats.map((cat) => (
                <div key={cat._id}>
                    <p>{cat.name}</p>
                    <p>{cat.sex}</p>
                </div>
            ))}
    </div>
    )
}

export default CatList;