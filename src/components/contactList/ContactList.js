import React from "react";
import style from "./contactList.module.css"
import ContactListItem from "./contactListItem/ContactListItem";

const ContactList = ({deleteContact, filterContacts}) => {
    const allContactItem = filterContacts.map(contact => (
        <ContactListItem contact={contact} key={contact.id} deleteContact={() => deleteContact(contact.id)}/>
    ));
    return <ul className={style.contactList}>{allContactItem}</ul>
};

export default ContactList;


