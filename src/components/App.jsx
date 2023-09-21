import { Component } from 'react';
import { ContactList } from './Contacts/Contacts';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    // Po zamontowaniu komponentu pobierz dane z localStorage (jeśli istnieją)
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }
  
  handleSubmit = newContact => {
    const existingContact = this.state.contacts.find(
      contact => contact.name === newContact.name
    );
    if (existingContact) {
      alert(`${existingContact.name} is already in contacts`);
    } else {
      this.setState(state => {
        const contacts = [...this.state.contacts, newContact];
        localStorage.setItem('contacts', JSON.stringify(contacts));
        return {
          name: newContact.name,
          contacts,
        };
      });
    }
  };

  //onChange event for Filter Component
  filterContacts = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = (e, contacts) => {
    const id = e.currentTarget.id;
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    const updatedContacts = filteredContacts.filter(
      contact => contact.id !== id
    );
    this.setState(
      {
        contacts: updatedContacts,
      },
      () => {
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      }
    );
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit}></ContactForm>
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          onChange={this.filterContacts}
        ></Filter>
        <ContactList
          contacts={filteredContacts}
          onButtonClick={this.deleteContact}
        ></ContactList>
      </div>
    );
  }
}
