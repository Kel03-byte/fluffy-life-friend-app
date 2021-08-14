// Edit A Single Cat Page

import React, { Fragment } from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_CAT } from '../../../../utils/queries';
import './edit-cat.css'

const EditCat = () => {
    let { id } = useParams()
    const catId = id
    const { loading, error, data } = useQuery(QUERY_SINGLE_CAT, {
        variables: { catId: catId }
    })
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        console.error(error.message)
    }
    return (
        <Fragment>
            <div id='edit-cat-page'><br/>
                <p id='edit-cat-title'>Edit {data.cat.name}'s details!</p>
                <p>DOB: {data.cat.dob}</p>
                <p>Sex: {data.cat.sex}</p><br/>
                <p>Use to other Cats? </p>
                <p>{data.cat.otherCats}!</p><br/>
                <p>Use to Dogs?</p>
                <p>{data.cat.dogs}!</p><br/>
                <p>Suitable in a home children under 8?</p>
                <p>{data.cat.childU8}!</p><br/>
                <p>Suitable in a home children between 8 and 13?</p>
                <p>{data.cat.child8to13}!</p><br/>
                <p>Any other special requirements?</p>
                <p>{data.cat.specialReq}</p>
            </div><br/>
        </Fragment>
    );
};

export default EditCat;