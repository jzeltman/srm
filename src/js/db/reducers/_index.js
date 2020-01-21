import { combineReducers } from "redux";
import contacts from './contacts';
import user from './user';
import ui from './ui';

export default combineReducers({ contacts, user, ui });