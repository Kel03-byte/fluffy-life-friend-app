// List of Adoptable Cats Component

import React from 'react';
// import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { REMOVE_CAT } from '../utils/mutations';

const EditList = ({ cats }) => {
    // let { id } = useParams()
    // const catId = id
    // const [removeCat, { error }] = useMutation(REMOVE_CAT);

    // const removeCatProfile = async () => {
    //     try {
    //         await removeCat(catId);
    //     } catch (error) {
    //         console.error(error.message);
    //     }
    // };

    return (
        <div id='edit-list'>
            {cats &&
                cats.map((cat) => (
                    <div key={cat._id}>
                        <p>{cat.name}!</p>
                        <button><Link id='nav-text' to={`/edit/${cat._id}`}>Edit</Link></button>
                        {/* <button onClick={removeCatProfile}>Delete</button> */}
                        <br />
                    </div>
                ))}
                {/* {error && <div>{error.message}</div>} */}
        </div>
    );
};

export default EditList;