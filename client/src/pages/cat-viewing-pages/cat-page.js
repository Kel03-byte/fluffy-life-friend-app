// Cat Veiwing Page Component

import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CATS } from '../../utils/queries';
import CatList from '../../components/cat-list'

const Cats = () => {
    const { loading, error, data } = useQuery(GET_CATS)
    const cats = data.cats
    if (loading) {
        return "Loading";
    } if (error) {
        console.error(error.message)
    } else if (data.getCats)
    return (
        <main>
            <CatList cats={cats}/>
        </main>
    )
}

export default Cats;