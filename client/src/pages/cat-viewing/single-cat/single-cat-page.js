// Single Cat Page Component

import React, { Fragment } from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_CAT } from '../../../utils/queries';
import './single-cat.css'

const Single = () => {
    let { id } = useParams()
    const catId = id
    const { loading, error, data } = useQuery(QUERY_SINGLE_CAT, {
        variables: { catId: catId }
    })
    if (loading) {
        return (
            <Fragment>
                <div id='loading-text'>Loading...</div><br />
            </Fragment>)
    }
    if (error) {
        console.error(error.message)
        return (
            <Fragment>
                <div id='loading-text'>{error.message}</div>
            </Fragment>
        )
    }
    return (
        <Fragment>
            <div id='cat-page'><br />
                <p id='cat-title'>Meet {data.cat.name}!</p>
                <img src={require(`../../../assets/cat-pics/${data.cat.image}`).default} alt={data.cat.image}></img>
                <p>DOB: {data.cat.dob}</p>
                <p>Sex: {data.cat.sex}</p><br />
                <p>Use to other Cats? </p>
                <p>{data.cat.otherCats}</p><br />
                <p>Use to Dogs?</p>
                <p>{data.cat.dogs}</p><br />
                <p>Suitable in a home children under 8?</p>
                <p>{data.cat.childU8}</p><br />
                <p>Suitable in a home children between 8 and 13?</p>
                <p>{data.cat.child8to13}</p><br />
                <p>Any other special requirements?</p>
                <p>{data.cat.specialReq}</p>
                <br />
                <p>Interested in meeting {data.cat.name}?</p>
                <p>Then make an appointment with Armadale Community Animal Rescue Group!</p>
                <p><a id='nav-text' href='https://www.facebook.com/ArmadaleCommunityAnimalRescueGroup?ref=ts&fref=ts'><i className='fab fa-facebook-square'></i> Facebook</a></p>
                <p><a id='nav-text' href="mailto:acarg@iinet.net.au"><i className='fas fa-envelope'></i> Email</a></p>
                <p> or call on 9399 4906</p><br />
            </div><br />
        </Fragment>
    );
};

export default Single;