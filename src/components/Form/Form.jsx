import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = evt => {
    evt.preventDefault();
    const newContact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };

    this.props.onSubmit(newContact);
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmitForm}>
          <label>
            Name
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              value={this.state.number}
              onChange={this.handleChange}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add to contacts</button>
        </form>
      </>
    );
  }
  // state = {contacts: [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ],
  // name: ''}

  // handleSubmit = event => {
  //   event.preventDefault();

  // const newContact = {
  //   name: this.state.name,
  //   id: nanoid(),
  // };

  // this.setState(prevState => {
  //   console.log(prevState);
  //   return {
  //     contacts: [this.state.contacts , newContact],
  //   };
  // });
  //   this.onAddItem();

  //   // this.reset();
  // };
  // onAddItem = () => {
  //   this.setState(state => {
  //      const newContact = {
  //        name: state.name,
  //        id: nanoid(),
  //     };
  //     const contacts = [...this.state.contacts, newContact];
  //     return {
  //       name: state.name,
  //       contacts
  //     }
  //    }, () => {console.log(this.state)})
  //  }

  // // reset = () => {
  // //   this.setState({ name: '' });
  // // };

  // handleChange = event => {
  //   const formValue = event.currentTarget.value;
  //   this.setState({
  //     name: formValue,
  //   });
  // };

  // render() {
  //   return (
  //     <>
  //       <h1>Phonebook</h1>
  //       <form onSubmit={this.handleSubmit}>
  //         <label>
  //           Name
  //           <input
  //             type="text"
  //             name="username"
  //             placeholder="Kek Hek"
  //             onChange={this.handleChange}
  //           />
  //         </label>
  //         <button type="submit">Add to Contact</button>
  //       </form>
  //     </>
  //   );
  // }
}
