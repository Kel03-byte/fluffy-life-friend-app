// Add A Cat Page Component

import React, { Fragment, useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CAT } from '../../utils/mutations';

export default function AddCat() {

    const [addCat, { error }] = useMutation(ADD_CAT)

    const [catName, setCatName] = useState('');
    const [dob, setDob] = useState('')
    const [sex, setSex] = useState('')
    const [isShy, setIsShy] = useState('')
    const [dogs, setDogs] = useState('')
    const [cats, setCats] = useState('')
    const [childU8, setChildU8] = useState('')
    const [child8to13, setChild8t13] = useState('')
    const [specialReq, setSpecReq] = useState('')

    const handleInputChange = (event) => {
        let target = event.target;
        let inputType = target.name;
        let inputValue = target.value;

        if (inputType === 'catName') {
            setCatName(inputValue);
        } else if (inputType === 'dob') {
            setDob(inputValue)
        } else if (inputType === 'sex') {
            setSex(inputValue)
        } else if (inputType === 'isShy') {
            setIsShy(inputValue)
        } else if (inputType === 'dogs') {
            setDogs(inputValue)
        } else if (inputType === 'cats') {
            setCats(inputValue)
        } else if (inputType === 'childU8') {
            setChildU8(inputValue)
        } else if (inputType === 'child8t13') {
            setChild8t13(inputValue)
        } else if (inputType === 'specialReq') {
            setSpecReq(inputValue)
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

                },
            })
            console.log('Yay it worked!')
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
        <Fragment>
            <div>Add A Cat Page!</div>
            <div>
                <form>
                    <input
                        value={catName}
                        name="catName"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="What is the name of the cat"
                    /><br />
                    <input
                        value={dob}
                        name="dob"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Cat's date of birth DD/MM/YYYY"
                    /><br />
                    <input
                        value={sex}
                        name="sex"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="What is the sex of the cat"
                    /><br />
                    <input
                        value={isShy}
                        name="isShy"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Is the cat shy? Yes/No"
                    /><br />
                    <input
                        value={cats}
                        name="cats"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Is the cat use to other cats? Yes/No"
                    /><br />
                    <input
                        value={dogs}
                        name="dogs"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Is the cat use to dogs? Yes/No"
                    /><br />
                    <input
                        value={childU8}
                        name="childU8"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Is the cat use to children under the age of 8? Yes/No"
                    /><br />
                    <input
                        value={child8to13}
                        name="child8t13"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Is the cat use to children between the ages of 8 and 13? Yes/No"
                    /><br />
                    <input
                        value={specialReq}
                        name="specialReq"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Any other special requirements?"
                    />
                </form><br />
                <button onClick={handleFormSubmit}>Submit</button>
                {error && (
                    <div>
                        <p className="error-text">Please Enter The Cat's Details</p>
                    </div>
                )}
            </div>

            <button>Sign Out!</button>
        </Fragment>
    );
}