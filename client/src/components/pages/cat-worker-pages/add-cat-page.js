// Add A Cat Page Component

import React, { Fragment, useState } from 'react';

export default function AddCat() {
    const [catName, setCatName] = useState('');
    const [dob, setDob] = useState('')
    const [sex, setSex] = useState('')
    const [isShy, setIsShy] = useState('')
    const [dogs, setDogs] = useState('')
    const [cats, setCats] = useState('')
    const [childU8, setChildU8] = useState('')
    const [child8t13, setChild8t13] = useState('')
    const [specReq, setSpecReq] = useState('')

    const [errorMessage, setErrorMessage] = useState('');

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
        } else if (inputType === 'specReq') {
            setSpecReq(inputValue)
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // if (!catName || !dob || !cats || !dogs || !isShy || !child8t13 || !childU8 || !specReq) {
        //     setErrorMessage('Please enter the info needed');
        // } else {
        //     setErrorMessage(`Hello ${catName}, dob: ${dob}, sex: ${sex}, you picked ${isShy} for being shy, you picked ${cats} for cats, you picked ${dogs} for dogs`);
        // }
        setErrorMessage(`Hello ${catName}, dob: ${dob}, sex: ${sex}, you picked ${isShy} for being shy, you picked ${cats} for cats, you picked ${dogs} for dogs`);
        setCatName('');
        setDob('');
        setCats('');
        setDogs('');
        setIsShy('');
        setChild8t13('');
        setChildU8('');
        setSex('');
        setSpecReq('');
        // setErrorMessage(``);
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
                        placeholder="what is the name of the cat"
                    /><br/>
                    <input
                        value={dob}
                        name="dob"
                        onChange={handleInputChange}
                        type="date"
                        placeholder="date of birth"
                    /><br/>
                    <input
                        value={sex}
                        name="sex"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="what is the sex of the cat"
                    /><br/>
                    <input
                        value={isShy}
                        name="isShy"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="is the cat shy"
                    /><br/>
                    <input
                        value={cats}
                        name="cats"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="is the cat use to other cats"
                    /><br/>
                    <input
                        value={dogs}
                        name="dogs"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="is the cat use to dogs"
                    /><br/>
                    <input
                        value={childU8}
                        name="childU8"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="is the cat use to children under the age of 8"
                    /><br/>
                    <input
                        value={child8t13}
                        name="child8t13"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="is the cat use to children between the ages of 8 and 13"
                    /><br/>
                    <input
                        value={specReq}
                        name="specReq"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Any other special requirements"
                    />
                </form><br/>
                <button onClick={handleFormSubmit}>Submit</button>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>

            <p>Upload up to 4 pictures here! <button>Upload Images!</button></p>

            <button>Sign Out!</button>
        </Fragment>
    );
}