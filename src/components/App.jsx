import React, { Component } from "react";
import { ContactForm } from "./ContactsForm/ContactForm";
import { ContactList } from "./ContactsList/ContactList";
export class App extends Component {
  state = {
    contacts: [],
  //   name: '',
  //   number: ''
  }

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
   return (
    <div>   
     <h2>Phonebook</h2>
    <ContactForm></ContactForm>
    <ContactList
    //  contacts={contacts}
     onDelete={this.deleteContact.bind(this)}
    />
 
    </div>
    );
  }
}
