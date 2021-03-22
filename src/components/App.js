import React, {Component} from "react";
// import style from "./App.module.css";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList";


class App extends Component {
  state = {
    contacts: [
      {id: "id-1", name: "Rosie Simpson", number: "459-12-56"},
      {id: "id-2", name: "Hermione Kline", number: "443-89-12"},
      {id: "id-3", name: "Eden Clements", number: "645-17-79"},
      {id: "id-4", name: "Annie Copeland", number: "227-91-26"}
    ],
    filter: ""
  };

  submitContact = data => {
    const isNameExist = this.state.contacts.some(
        contact => contact.name === data.name
    );
    !isNameExist
        ? this.setState(prevState =>
            data.name
                ? {
                  contacts: [...prevState.contacts, data]
                }
                : alert("empty name")
        )
        : alert("This name exist");
  };

  deleteContact = e => {
    const id = e.target.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  getFilterContacts = e => {
    this.setState({
      filter: e.target.value
    });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(this.state.filter)
    );
  };
  editContacts = ()=> {}

  render() {
    return (
        <div className={style.phonebook}>
          <div>
            <h1>Phonebook</h1>
            <ContactForm submitContact={this.submitContact}/>
            {this.state.contacts.length > 2 && (
                <Filter getFilterContacts={this.getFilterContacts}/>
            )}
          </div>
          <div>
            <h2>Contacts</h2>

            {this.state.contacts.length > 2 ? (

                <ContactList
                    contacts={this.filterContacts}
                    deleteContact={this.deleteContact}

                />
            ) : (
                <ContactList
                    contacts={this.state.contacts}
                    deleteContact={this.deleteContact}

                />
            )}
          </div>
        </div>
    );
  }
}

export default App;
