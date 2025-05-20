import React, { useState } from 'react';

function FormExample() {
    const [name, setName] = useState('');
    const [submittedName, setSubmittedName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedName(name);
        setName('');
    };

    return (
        <>
        <h1>Form Handling</h1>
            <form onSubmit={handleSubmit}>
                <div className='card'>
                    <input
                        className='input-box'
                        type="text"
                        value={name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />
                    <button className='btn' type="submit">Submit</button>
                </div>
            </form>
            {submittedName && (
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <h3>Submitted Name: {submittedName}</h3>
                </div>
            )}
        </>
    );
}

export default FormExample;
