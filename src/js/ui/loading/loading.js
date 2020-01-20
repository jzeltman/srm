import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './loading.scss';

const Loading = props => {
    return (
        <div id="Loading" className="loading-wrapper">
            <div id="Loading-Progress"></div>
            <i className="fas fa-spinner Loading-Spinner"></i>
        </div>
    )
}

const mapStateToProps = state => {
    return { 
        loading: state.ui.loading
    }
};

export default connect(mapStateToProps,null)(Loading);