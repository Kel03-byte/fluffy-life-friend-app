// Edit Page

import React, {Fragment} from 'react';
import { useQuery } from '@apollo/client';
import { GET_CATS } from '../../../../utils/queries';
import EditList from '../../../../components/edit-cat-list';
import './edit-page.css';

const EditPage = () => {
    const { loading, error, data } = useQuery(GET_CATS)
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        console.error(error.message)
    }
    return (
        <Fragment>
            <div id='edit-page'>
            <div id='edit-title'>Click on the cat that you are wanting to update or delete!</div><br/>
            <EditList cats={data.cats} />
            </div>
        </Fragment>
    );
};

export default EditPage;