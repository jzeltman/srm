import { combineReducers } from "redux";
import contact from './contact';
import contacts from './contacts';
import user from './user';
import ui from './ui';

export default combineReducers({ contact, contacts, user, ui });