import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { Phonebook } from './Phonebook/Phonebook';
import { nanoid } from 'nanoid';
import { ContactForm } from './Form/Form';

const INITIAL_STATE = {
  contacts: [],
  name: '',
};

export class App extends Component {
  state = {
    ...INITIAL_STATE,
  };
  
  render() {console.log(this.state)
      return (
        <>
          <ContactForm></ContactForm>
      <Contacts contactList={this.state.contacts}></Contacts>
    </>
  );
  }

};
