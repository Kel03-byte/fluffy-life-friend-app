// Single Cat Page Component

import React, { Fragment } from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_CAT } from '../../utils/queries';

export default function Single() {
    let {id} = useParams()
    const catId = id
    const {loading, error, data} = useQuery(QUERY_SINGLE_CAT, {
        variables: { catId: catId}
    })
    if (loading) {
        return <div>Loading...</div>;
    }
    if(error) {
        console.error(error.message)
    }
    return (
        <Fragment>
            <div>Single Cat Page!</div>
            <p>Meet {data.cat.name}</p>
            <p>DOB: {data.cat.dob}</p>
            <p>Sex: {data.cat.sex}</p>
            <p>Use to other Cats? {data.cat.otherCats}</p>
            <p>Use to Dogs? {data.cat.dogs}</p>
            <p>Suitable in a home children under 8? {data.cat.childU8}</p>
            <p>Suitable in a home children between 8 and 13? {data.cat.child8to13}</p>
            <p>Any other special requirements? {data.cat.specialReq}</p>
         </Fragment>
    );
}