import { Component } from 'react';
import { ContactList } from './Contacts/Contacts';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = newContact => {
    const existingContact = this.state.contacts.find(
      contact => contact.name === newContact.name
    );
    console.log(existingContact);
    if (existingContact) {
      alert(`${existingContact.name} is already in contacts`);
    } else {
      this.setState(
        state => {
          const contacts = [...this.state.contacts, newContact];
          return {
            name: newContact.name,
            contacts,
          };
        },
        () => {
          this.reset();
        }
      );
    }
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  //onChange for Filter
  filterContacts = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <>
        <ContactForm onSubmit={this.handleSubmit}></ContactForm>
        <ContactList
          contacts={filteredContacts}
          children={
            <Filter
              value={this.state.filter}
              onChange={this.filterContacts}
            ></Filter>
          }
        ></ContactList>
      </>
    );
  }
}
