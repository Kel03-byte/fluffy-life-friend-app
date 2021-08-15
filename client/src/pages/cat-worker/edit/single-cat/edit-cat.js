// Edit A Single Cat Page

import React, { useState, Fragment } from 'react';
import { useParams } from 'react-router';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_SINGLE_CAT } from '../../../../utils/queries';
import { UPDATE_CAT, REMOVE_CAT } from '../../../../utils/mutations';
import './edit-cat.css'

const EditCat = () => {
    let { id } = useParams()
    const catId = id
    const { loading, error, data } = useQuery(QUERY_SINGLE_CAT, {
        variables: { catId: catId }
    })

    const [updateCat, { error: updateError }] = useMutation(UPDATE_CAT);
    const [removeCat, { data: removeData, error: removeError }] = useMutation(REMOVE_CAT);

    const [catName, setCatName] = useState();
    const [dob, setDob] = useState();
    const [sex, setSex] = useState();
    const [isShy, setIsShy] = useState();
    const [dogs, setDogs] = useState();
    const [cats, setCats] = useState();
    const [childU8, setChildU8] = useState();
    const [child8to13, setChild8t13] = useState();
    const [specialReq, setSpecReq] = useState();

    const removeCatProfile = async (event) => {
        event.preventDefault()
        removeCat({
            variables: {catId: catId}})
    };
    
    const handleInputChange = (event) => {
        let target = event.target;
        let inputType = target.name;
        let inputValue = target.value;
        
        if (inputType === 'catName') {
            setCatName(inputValue);
        } else if (inputType === 'dob') {
            setDob(inputValue);
        } else if (inputType === 'sex') {
            setSex(inputValue);
        } else if (inputType === 'isShy') {
            setIsShy(inputValue);
        } else if (inputType === 'dogs') {
            setDogs(inputValue);
        } else if (inputType === 'cats') {
            setCats(inputValue);
        } else if (inputType === 'childU8') {
            setChildU8(inputValue);
        } else if (inputType === 'child8t13') {
            setChild8t13(inputValue);
        } else if (inputType === 'specialReq') {
            setSpecReq(inputValue);
        }
    };
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await updateCat({
                variables: {
                    catId: catId,
                    name: catName,
                    dob: dob,
                    sex: sex,
                    shy: isShy,
                    dogs: dogs,
                    otherCats: cats,
                    childU8: childU8,
                    child8to13: child8to13,
                    specialReq: specialReq,
                },
            })
        } catch (error) {
            console.log(error.message);
        }
        setCatName('');
        setDob('');
        setCats('');
        setDogs('');
        setIsShy('');
        setChild8t13('');
        setChildU8('');
        setSex('');
        setSpecReq('');
    };
    
    return (
        <main>{loading ? (
            <div>Loading...</div>
        ) : (
            <Fragment>
                <div id='edit-cat-page'><br />
                    <p id='edit-cat-title'>Update {data.cat.name}'s details!</p>
                    <form id='add-form'>
                        <div id='add-box'>
                            <label>Update {data.cat.name}'s name:</label><br />
                            <input
                                id='add-input'
                                value={catName}
                                name="catName"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="cat's name"
                            />
                        </div><br />
                        <div id='add-box'>
                            <label>Update {data.cat.name}'s DOB:</label><br />
                            <input
                                id='add-input'
                                value={dob}
                                name="dob"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="DD/MM/YYYY"
                            />
                        </div><br />
                        <div id='add-box'>
                            <label>Update {data.cat.name}'s' sex:</label><br />
                            <input
                                id='add-input'
                                value={sex}
                                name="sex"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Male/Female"
                            />
                        </div><br />
                        <div id='add-box'>
                            <label>Update if {data.cat.name} is shy:</label><br />
                            <input
                                id='add-input'
                                value={isShy}
                                name="isShy"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Yes/No"
                            />
                        </div><br />
                        <div id='add-box'>
                            <label>Update if {data.cat.name} is use to other cats:</label><br />
                            <input
                                id='add-input'
                                value={cats}
                                name="cats"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Yes/No"
                            />
                        </div><br />
                        <div id='add-box'>
                            <label>Update if {data.cat.name} is use to dogs:</label><br />
                            <input
                                id='add-input'
                                value={dogs}
                                name="dogs"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Yes/No"
                            />
                        </div><br />
                        <div id='add-box'>
                            <label>Update if {data.cat.name} is use to children under the age of 8:</label><br />
                            <input
                                id='add-input'
                                value={childU8}
                                name="childU8"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Yes/No"
                            />
                        </div ><br />
                        <div id='add-box'>
                            <label>Update if {data.cat.name} is use to children between the ages of 8 to 13?</label><br />
                            <input
                                id='add-input'
                                value={child8to13}
                                name="child8t13"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Yes/No"
                            />
                        </div><br />
                        <div id='add-box'>
                            <label>Update any Special Requirements for {data.cat.name}:</label><br />
                            <input
                                id='add-input'
                                value={specialReq}
                                name="specialReq"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Any other special needs?"
                            />
                        </div><br />
                        <button id='add-button' onClick={handleFormSubmit}>Submit</button>
                        <button id='add-button' onClick={removeCatProfile}>Delete</button>
                    </form><br />
                </div>
            </Fragment>)}
            {error && <div>{error.message}</div>}
            {updateError && <div>{updateError.message}</div>}
            {removeError && <div>{removeError.message}</div>}
            {removeData && <div>The data has been deleted!</div>}
            <br /></main>
    );
};

export default EditCat;