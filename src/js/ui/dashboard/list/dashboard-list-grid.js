import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DashboardGridButtons from './dashboard-list-grid-buttons';
import DashboardGridUpdateAction from './dashboard-list-grid-buttons-update-action';
import { isContactsBirthday } from 'Utils/birthday';

const GridItem = props => {
    let [expanded,setExpanded] = useState(false);
    let footerMarkup;
    let date = new Date();
    let defaultDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, 0)}-${date.getDate().toString().padStart(2, 0)}`;
    let isBirthdate = isContactsBirthday(props.contact);
    let hasActions = false;
    let style = { backgroundImage: `url(${props.contact.PHOTO})` };
    let liClassName = 'Dashboard-List-Contact-Grid-Item';

    if (props.contact.PHOTO) liClassName += ' photo';
    else liClassName += ' empty';
    if (expanded) liClassName += ' expanded';

    if (!expanded) {
        footerMarkup = <DashboardGridButtons contact={props.contact} setExpanded={setExpanded} />;
    }
    if (expanded === 'update') {
        footerMarkup = <DashboardGridUpdateAction 
            contact={props.contact} 
            setExpanded={setExpanded} 
            defaultText="My update is..."
            defaultDate={defaultDate}
            buttonText="Update +"
            buttonIconClass="far fa-sticky-note"
            contactKey="updates"
            dateLabel="Update Date:"
        />;
    }
    if (expanded === 'action') {
        footerMarkup = <DashboardGridUpdateAction 
            contact={props.contact} 
            setExpanded={setExpanded} 
            defaultText="My action is..."
            defaultDate={defaultDate}
            buttonText="Action +"
            buttonIconClass="far fa-bell"
            contactKey="action"
            dateLabel="Remind Me On:"
        />;
    }



    return (
        <li 
            key={props.key}
            className={liClassName}
            style={style}
        >
            {props.contact.PHOTO ? <></> : <i className="fas fa-user-circle"></i>}
            <div>
                <Link to={`/contacts/${props.contact.uid}`}>
                    <h4>
                        <span>{props.contact.FN}</span>
                        <span>
                            {hasActions ? <i className="fas fa-bell"></i> : <></>}
                            {isBirthdate ? <i className="fas fa-birthday-cake"></i> : <></>}
                        </span>
                    </h4>
                </Link>
                {footerMarkup}
            </div>
        </li>
    )
}

export default connect()(GridItem);