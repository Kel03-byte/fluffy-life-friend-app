// Edit A Single Cat Page

import React, { Fragment, useState } from 'react';
import { useParams } from 'react-router';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_SINGLE_CAT } from '../../../../utils/queries';
import { REMOVE_CAT, UPDATE_DOB, UPDATE_SHY, UPDATE_SEX, UPDATE_OTHER_CATS, UPDATE_DOGS, UPDATE_CHILDU8, UPDATE_CHILDO8, UPDATE_SPEC_REQ } from '../../../../utils/mutations';
import './edit-cat.css'

const EditCat = () => {
    let { id } = useParams()
    const catId = id
    const { data, loading, error } = useQuery(QUERY_SINGLE_CAT, {
        variables: { catId: catId }
    })

    const [dob, setDob] = useState('');
    const [sex, setSex] = useState('');
    const [shy, setShy] = useState('');
    const [cats, setCats] = useState('');
    const [dogs, setDogs] = useState('');
    const [childU8, setChildU8] = useState('');
    const [child8to13, setChildO8] = useState('');
    const [specialReq, setSpecReq] = useState('');

    const [removeCat, { data: removeData, error: removeError }] = useMutation(REMOVE_CAT);
    const [updateDob, { data: dobData }] = useMutation(UPDATE_DOB);
    const [updateSex, { data: sexData }] = useMutation(UPDATE_SEX);
    const [updateShy, { data: shyData }] = useMutation(UPDATE_SHY);
    const [updateOtherCats, { data: catsData }] = useMutation(UPDATE_OTHER_CATS);
    const [updateDogs, { data: dogsData }] = useMutation(UPDATE_DOGS);
    const [updateChildU8, { data: childU8Data }] = useMutation(UPDATE_CHILDU8);
    const [updateChild8to13, { data: childO8Data }] = useMutation(UPDATE_CHILDO8);
    const [updateSpecialReq, { data: specReqData }] = useMutation(UPDATE_SPEC_REQ)

    const removeCatProfile = async (event) => {
        event.preventDefault()
        removeCat({ variables: { catId: catId } })
    };

    const updateFormDob = async (event) => {
        event.preventDefault()
        updateDob({ variables: { catId: catId, dob: dob } })
    }

    const updateFormSex = async (event) => {
        event.preventDefault()
        updateSex({ variables: { catId: catId, sex: sex } })
    }

    const updateFormShy = async (event) => {
        event.preventDefault()
        updateShy({ variables: { catId: catId, shy: shy } })
    }

    const updateFormOtherCats = async (event) => {
        event.preventDefault()
        updateOtherCats({ variables: { catId: catId, otherCats: cats } })
    }

    const updateFormDogs = async (event) => {
        event.preventDefault()
        updateDogs({ variables: { catId: catId, dogs: dogs } })
    }

    const updateFormChildU8 = async (event) => {
        event.preventDefault()
        updateChildU8({ variables: { catId: catId, childU8: childU8 } })
    }

    const updateFormChildO8 = async (event) => {
        event.preventDefault()
        updateChild8to13({ variables: { catId: catId, child8to13: child8to13 } })
    }

    const updateFormSpecReq = async (event) => {
        event.preventDefault()
        updateSpecialReq({ variables: { catId: catId, specialReq: specialReq } })
    }

    const handleInputChange = (event) => {
        let target = event.target;
        let inputType = target.name;
        let inputValue = target.value;

        if (inputType === 'dob') {
            setDob(inputValue);
        } else if (inputType === 'sex') {
            setSex(inputValue);
        } else if (inputType === 'shy') {
            setShy(inputValue);
        } else if (inputType === 'cats') {
            setCats(inputValue)
        } else if (inputType === 'dogs') {
            setDogs(inputValue)
        } else if (inputType === 'childU8') {
            setChildU8(inputValue)
        } else if (inputType === 'child8to13') {
            setChildO8(inputValue)
        } else if (inputType === 'specialReq') {
            setSpecReq(inputValue)
        }
    };

    return (
        <main>{loading ? (
            <div>Loading...</div>
        ) : (
            <Fragment >
                <div id='edit-cat-page'>
                    <div>
                        <p id='edit-cat-title'>Update/Delete {data.cat.name}</p>
                        {error && <div>{error.message}</div>}
                        {removeError && <div>{removeError.message}</div>}
                        {removeData && <div>The cat has been succesfully removed!</div>}
                        <img src={require(`../../../../assets/cat-pics/${data.cat.image}`).default} alt={data.cat.image}></img>
                        <p>Delete {data.cat.name} from the database?
                            <button id='delete-button' onClick={removeCatProfile}>Delete</button></p>
                        <p>OR</p>
                        <p>Update {data.cat.name}'s Details</p>
                    </div>
                    <div id='edit-form'>
                        <div id='add-box'>
                            <label>{data.cat.name}'s Date of Birth:</label><br/>
                            <input
                                className='edit-input'
                                value={dob}
                                name='dob'
                                onChange={handleInputChange}
                                type='text'
                                placeholder='DD/MM/YYYY'
                            />
                            <button id='edit-button' onClick={updateFormDob}>Update</button>
                            {dobData && <div>The data has been succesfully updated!</div>}
                        </div><br />
                        <div id='add-box'>
                            <label>{data.cat.name}'s Sex:</label><br/>
                            <input
                                className='edit-input'
                                value={sex}
                                name='sex'
                                onChange={handleInputChange}
                                type='text'
                                placeholder='Male/Female'
                            />
                            <button id='edit-button' onClick={updateFormSex}>Update</button>
                            {sexData && <div>The data has been succesfully updated!</div>}
                        </div><br />
                        <div id='add-box'>
                            <label>Is {data.cat.name} shy:</label><br/>
                            <input
                                className='edit-input'
                                value={shy}
                                name='shy'
                                onChange={handleInputChange}
                                type='text'
                                placeholder='Yes/No'
                            />
                            <button id='edit-button' onClick={updateFormShy}>Update</button>
                            {shyData && <div>The data has been succesfully updated!</div>}
                        </div><br />
                        <div id='add-box'>
                            <label>Is {data.cat.name} use to other cats:</label><br/>
                            <input
                                className='edit-input'
                                value={cats}
                                name='cats'
                                onChange={handleInputChange}
                                type='text'
                                placeholder='Yes/No'
                            />
                            <button id='edit-button' onClick={updateFormOtherCats}>Update</button>
                            {catsData && <div>The data has been succesfully updated!</div>}
                        </div><br />
                        <div id='add-box'>
                            <label>Is {data.cat.name} use to dogs:</label><br/>
                            <input
                                className='edit-input'
                                value={dogs}
                                name='dogs'
                                onChange={handleInputChange}
                                type='text'
                                placeholder='Yes/No'
                            />
                            <button id='edit-button' onClick={updateFormDogs}>Update</button>
                            {dogsData && <div>The data has been succesfully updated!</div>}
                        </div><br />
                        <div id='add-box'>
                            <label>Is {data.cat.name} use to children under 8 years old:</label><br/>
                            <input
                                className='edit-input'
                                value={childU8}
                                name='childU8'
                                onChange={handleInputChange}
                                type='text'
                                placeholder='Yes/No'
                            />
                            <button id='edit-button' onClick={updateFormChildU8}>Update</button>
                            {childU8Data && <div>The data has been succesfully updated!</div>}
                        </div><br />
                        <div id='add-box'>
                            <label>Is {data.cat.name} use to children between 8 to 13 years old:</label><br/>
                            <input
                                className='edit-input'
                                value={child8to13}
                                name='child8to13'
                                onChange={handleInputChange}
                                type='text'
                                placeholder='Yes/No'
                            />
                            <button id='edit-button' onClick={updateFormChildO8}>Update</button>
                            {childO8Data && <div>The data has been succesfully updated!</div>}
                        </div><br />
                        <div id='add-box'>
                            <label>{data.cat.name}'s special requirements:</label><br/>
                            <input
                                className='edit-input'
                                value={specialReq}
                                name='specialReq'
                                onChange={handleInputChange}
                                type='text'
                                placeholder='Enter any special requirements'
                            />
                            <button id='edit-button' onClick={updateFormSpecReq}>Update</button>
                            {specReqData && <div>The data has been succesfully updated!</div>}
                        </div><br />
                    </div>
                </div>
            </Fragment>)
        }
            <br /></main >
    );
};

export default EditCat;