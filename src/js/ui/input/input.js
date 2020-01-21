import React, { useState, useEffect } from 'react';

import './input.scss';

const Input = props => {
    const {
        name,
        label,
        defaultValue,
        onChange,
        onBlur,
        type = 'text',
    } = props;

    return (
        <div className="Input">
            <label htmlFor={name}>{label}</label>
            <input 
                type={type}
                defaultValue={defaultValue} 
                name={name}
                onChange={onChange} 
                onBlur={onBlur}
            />
        </div>
    )
}

export default Input;