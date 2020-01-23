import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

const HeaderToday = props => {
    return (
        <>
            <header id="Header-Dashboard">
                <h2 id="Contact-List-Title">
                    <i className="fas fa-calendar-day"></i>
                    <span> Today</span>
                </h2>
                <button>
                    <i className="fas fa-filter"></i>
                </button>
            </header>
        </>
    );
}

export default withRouter(connect()(HeaderToday));
