import React, { useState, useEffect } from 'react';
import timeToContact from '../../../app/utils/timeToContact';
import './contact-list.scss';

const ContactList = ({data, changeContent}) => {
    const alphaSort = () => {
        return data.sort((a,b) => {
            console.log(`a:${a.FN}\nb:${b.FN}`)
            if (a.FN < b.FN) return -1;
            if (a.FN > b.FN) return 1;
            else return 0;
        })
    }
    const renderContactList = () => {
        if (data === null || data.length === 0) return <li>Look's like you don't have any contacts. Let's make one</li>;
        else {
            const sorted = alphaSort();
            return sorted.map((contact,key) => {
                const status = timeToContact(contact.last_update,contact.frequency);
                const statusClassName = status ? "fa-user-clock" : "fa-thumbs-up";
                return (
                    <li key={key} onClick={() => changeContent(contact)} className="Contact-List-Item">
                        <span>{contact.FN}</span> 
                        <span><i className={`fas ${statusClassName}`}></i></span> 
                    </li>
                );
            });
        }
    }

    const sortHandler = e => {
        console.log('sortHandler',e);
    }

    return (
        <div id="Contact-List">
            <header>
                <h2 id="Contact-List-Title">
                    <i className="fas fa-address-book"></i>
                    <span> Contacts</span>
                </h2>
                <div>
                    <label htmlFor="for">Sort</label>
                    <select name="sort" onChange={sortHandler}>
                        <option value="alpha">A-Z</option>
                        <option value="group">Group</option>
                        <option value="date">Date</option>
                    </select>
                </div>
            </header>
            <ul id="Contact-List-Items">
                <li className="Contact-List-Admin" onClick={() => changeContent('import')}>Import Contact <i className="fas fa-file-import"></i></li>
                <li className="Contact-List-Admin" onClick={() => changeContent('new')}>New Contact <i className="fas fa-user-plus"></i></li>
                {renderContactList()}
            </ul>
            <footer>
                <img src="https://picsum.photos/300/250/" id="advert" />
                <i className="fas fa-ad"></i>
            </footer>
        </div>
    )
}

export default ContactList;