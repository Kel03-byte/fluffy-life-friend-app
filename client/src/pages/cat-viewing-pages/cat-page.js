// Cat Veiwing Page Component

import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CATS } from '../../utils/queries';
import CatList from '../../components/cat-list'

const Cats = () => {
    const { loading, error, data } = useQuery(GET_CATS)
    if (loading) {
        return <div>Loading...</div>;
    }
    if(error) {
        console.error(error.message)
    }
    return (
        <main>
            <CatList cats={data.cats} />
        </main>
    )

}

export default Cats;