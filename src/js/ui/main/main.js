import React from 'react';
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom';

import ContactList from 'Components/contact-list/contact-list';
import Today from 'Components/today/today';

import './main.scss';
import '../../../css/privacy.scss';

const Main = () => {
    return (
        <main>
            <Switch>
                <Route path="/contacts" component={ContactList} />
                <Route path="/actions">
                    <div>actions</div>
                </Route>
                <Route path="/birthdays">
                    <div>birthdays</div>
                </Route>
                <Route path="/user">
                    <div>user profile</div>
                </Route>
                <Route component={Today} />
            </Switch>
        </main>
    )
}

export default withRouter(connect(null,null)(Main));