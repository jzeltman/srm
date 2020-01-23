import React from 'react';
import { connect } from 'react-redux'
import { Switch, Route, withRouter,  } from 'react-router-dom';

import ContactList from 'Components/contact-list/contact-list';
import Contact from 'Components/contact/contact';
import Dashboard from 'Components/dashboard/dashboard';
import User from 'Components/user/user';

import './main.scss';
import '../../../css/privacy.scss';

const Main = props => {
    return (
        <main data-route={props.location.pathname}>
            <Switch>
                <Route path="/contacts/:uid">
                    <ContactList />
                    <Contact />
                </Route>
                <Route path="/contacts" component={ContactList} />
                <Route path="/actions">
                    <div>actions</div>
                </Route>
                <Route path="/birthdays">
                    <div>birthdays</div>
                </Route>
                <Route path="/user" component={User} />
                <Route component={Dashboard} />
            </Switch>
        </main>
    )
}

export default withRouter(connect()(Main));