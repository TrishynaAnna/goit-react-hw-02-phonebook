import React from 'react';
import style from './ContactListItem.module.css';

const ContactListItem = ({contact, deleteContact}) => {
    const {name, number} = contact;
    return (
        <li className={style.listItem}>
            <h4>{name} : {number}</h4>
            <button className={style.button} type="button" onClick={deleteContact}>
                Delete
            </button>
        </li>
    );
};

export default ContactListItem;
