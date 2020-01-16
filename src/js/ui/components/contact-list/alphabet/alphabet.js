import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { LETTERS } from 'Constants';

import './alphabet.scss';

const Alphabet = (props) => {
    const onClickHandler = e => {
        console.log('onClickHandler:', e, e.target.innerText)

    }

    return (
        <ul id="Alphabet">
            {LETTERS.map((letter,key) => (
                <li 
                    key={key} 
                    className={props.letter === letter ? 'selected' : ''}
                    onClick={onClickHandler}
                >{letter}</li>
            ))}
        </ul>
    )
}

const propMap = state => {
    return {
        letter: state.ui.letter
    }
}

export default connect(null,null)(Alphabet);