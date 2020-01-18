import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

const HeaderToday = props => {
    return (
        <h2>
            <span>Today's Contacts</span>
            <i className="fas fa-calendar-day"></i>
        </h2>
    );
}

export default withRouter(connect()(HeaderToday));
