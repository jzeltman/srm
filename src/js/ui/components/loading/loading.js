import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './loading.scss';

const Loading = props => {
    if (props.loading !== false) {
        return (
            <div id="Loading">
                <div id="Loading-Progress"></div>
                <i className="fas fa-spinner Loading-Spinner"></i>
            </div>
        )
    } else return <></>;
}

const mapStateToProps = state => {
    return { 
        loading: state.ui.loading
    }
};

export default connect(mapStateToProps,null)(Loading);