import React from 'react';

import './input.scss';

const Input = props => {
    let {
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
                value={defaultValue} 
                name={name}
                onChange={onChange} 
                onBlur={onBlur}
            />
        </div>
    )
}

export default Input;