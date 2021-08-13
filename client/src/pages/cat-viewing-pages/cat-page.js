// Cat Veiwing Page Component

import React, { Fragment } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CATS } from '../../utils/queries';
import CatList from '../../components/cat-list';

const Cats = () => {
    const { loading, error, data } = useQuery(GET_CATS)
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        console.error(error.message)
    }
    return (
        <Fragment>
            <CatList cats={data.cats} />
        </Fragment>
    )
}

export default Cats;