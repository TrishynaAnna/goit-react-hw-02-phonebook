import React, {Component} from "react";
import style from "./App.module.css";
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
    componentDidMount() {
        console.log("componentDidMount")
      const contacts = JSON.parse(localStorage.getItem("contacts"));
      if(contacts){
          this.setState({contacts});
      }
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.state.contacts !== prevState.contacts){
            localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
        }
    }

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
                    : alert("Empty name")
            )
            : alert("This name exist");
    };

    filterContact = (e) => {
        let filt = e.target.value;
        this.setState({filter: filt});
    };

    filteredContact = () => {
        if (this.state.filter) {
            return this.state.contacts.filter((contact) =>
                contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
            );
        } else {
            return this.state.contacts;
        }
    };

    deleteContact = (id) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.filter((contact) => contact.id !== id),
        }));
    };

    render() {
        const {contacts} = this.state;
        return (
            <div className={style.phonebook}>
                <div>
                    <h1>Phonebook</h1>
                    <ContactForm contacts={contacts} submitContact={this.submitContact}/>
                </div>
                <div>
                    <h2>Contacts</h2>
                    <Filter filterContact={this.filterContact}/>
                    <ContactList
                        contacts={contacts}
                        deleteContact={this.deleteContact}
                        filterContacts={this.filteredContact()}
                    />
                </div>
            </div>
        );
    }
}

export default App;
