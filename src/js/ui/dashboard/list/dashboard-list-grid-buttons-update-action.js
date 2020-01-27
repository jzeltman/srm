import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateAndSaveContact } from 'Actions/contacts';

const DashboardGridUpdateAction = props => {
    let [text,setText] = useState(props.defaultText);
    let [date,setDate] = useState(props.defaultDate);

    const updateHandler = () => {
        props.update(props.contact,props.contactKey,{ date: date, update: text });
        props.setExpanded(false);
    };

    return (
        <footer className="Dashboard-Grid-Buttons Update">
            <header>
                <button className="add-update">
                    <i className={props.buttonIconClass}></i>
                    <span>{props.buttonText}</span>
                </button>
                <button 
                    className="contacted"
                    onClick={() => props.setExpanded(false)}
                >
                    <i className="fas fa-ban"></i>
                </button>
                <button 
                    className="contacted"
                    onClick={updateHandler}
                >
                    <i className="fas fa-save"></i>
                </button>
            </header>
            <footer>
                <div className="Dashboard-Grid-Update">
                    <textarea placeholder={text} onChange={e => setText(e.target.value)}></textarea>
                </div>
                <div className="Dashboard-Grid-Update-Date">
                    <label>{props.dateLabel}</label>
                    <input type="date" defaultValue={date} onChange={e => setDate(e.target.value)}/>
                </div>
            </footer>
        </footer>
    )
}

const dispatcher = dispatch => {
    return {
        update: (contact,key,value) => {
            dispatch(updateAndSaveContact(contact,key,value))
        }
    }
}

export default connect(null,dispatcher)(DashboardGridUpdateAction);