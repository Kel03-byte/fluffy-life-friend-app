// Add A Cat Page

import React, { Fragment, useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CAT } from '../../../utils/mutations';
import './add.css';

const AddCat = () => {

    const [addCat, { data, error }] = useMutation(ADD_CAT);

    const [catName, setCatName] = useState('');
    const [dob, setDob] = useState('');
    const [sex, setSex] = useState('');
    const [isShy, setIsShy] = useState('');
    const [dogs, setDogs] = useState('');
    const [cats, setCats] = useState('');
    const [childU8, setChildU8] = useState('');
    const [child8to13, setChild8t13] = useState('');
    const [specialReq, setSpecReq] = useState('');
    const [image, setImage] = useState('')

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
        } else if (inputType === 'image') {
            setImage(inputValue)
        }
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await addCat({
                variables: {
                    name: catName,
                    dob: dob,
                    sex: sex,
                    shy: isShy,
                    dogs: dogs,
                    otherCats: cats,
                    childU8: childU8,
                    child8to13: child8to13,
                    specialReq: specialReq,
                    image: image,
                },
            });
        } catch (error) {
            console.log(error.message);
        };
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
        <Fragment>
            <div id='add-page'>
                {data && <div id='add-message'>The Cat's details have been added!</div>}
                {error && <div id='add-message'>Please Enter The Cat's Details</div>}
                <div>
                    <form id='add-form'>
                        <div id='add-title'>Add Cat Details</div>
                        <div id='add-box'>
                            <label>Name of The Cat?</label><br />
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
                            <label>Cat's Date of Birth?</label><br />
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
                            <label>Cat's sex?</label><br />
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
                            <label>Is The Cat shy?</label><br />
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
                            <label>Is The Cat use to other cats?</label><br />
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
                            <label>Is The Cat use to dogs?</label><br />
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
                            <label>Is The Cat use to children under the age of 8?</label><br />
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
                            <label>Is The Cat use to children between the ages of 8 to 13?</label><br />
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
                            <label>Special Requirements for this cat?</label><br />
                            <input
                                id='add-input'
                                value={specialReq}
                                name="specialReq"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="FIV, Diet, Diabetes, Bonded Pair etc"
                            />
                        </div><br />
                        <div id='add-box'>
                            <label>What is the file name of the picture of the cat?</label><br />
                            <input
                                id='add-input'
                                value={image}
                                name="image"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="image.jpg etc"
                            />
                        </div><br />
                        <button id='add-button' onClick={handleFormSubmit}>Submit</button>
                    </form><br />
                </div>
            </div><br />
        </Fragment>
    );
};

export default AddCat;