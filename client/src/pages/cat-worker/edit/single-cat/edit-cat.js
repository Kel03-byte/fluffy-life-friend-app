// Edit A Single Cat Page

import React, { Fragment } from 'react';
import { useParams } from 'react-router';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_SINGLE_CAT } from '../../../../utils/queries';
import { REMOVE_CAT } from '../../../../utils/mutations';
import './edit-cat.css'

const EditCat = () => {
    let { id } = useParams()
    const catId = id
    const { data, loading, error } = useQuery(QUERY_SINGLE_CAT, {
        variables: { catId: catId }
    })

    const [removeCat, { data: removeData, error: removeError }] = useMutation(REMOVE_CAT);


    const removeCatProfile = async (event) => {
        event.preventDefault()
        removeCat({
            variables: { catId: catId }
        })
    };


    return (
        <main>{loading ? (
            <div>Loading...</div>
        ) : (
            <Fragment>
                <div id='edit-cat-page'><br />
                    <p id='edit-cat-title'>Delete {data.cat.name}</p>
                    {removeError && <div>{removeError.message}</div>}
                    {removeData && <div>The cat has been succesfully removed!</div>}
                    {error && <div>{error.message}</div>}
                    <p>Delete {data.cat.name} from the database?</p>
                    <button id='edit-button' onClick={removeCatProfile}>Delete</button>
                </div>
            </Fragment>)}
            <br /></main>
    );
};

export default EditCat;