import { Component } from 'react';
import { nanoid } from 'nanoid';

export class Phonebook extends Component {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   name: '',
  //   number: '',
  // };
  // static defaultProps = {
  //   name: "",
  //   number: "",
  // }

  // handleChange = evt => {
  //   const { name, value } = evt.target;
  //   this.setState({ [name]: value });
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   console.log(this.state);

  //   this.setState(state => {
  //     const newContact = {
  //         name: state.name,
  //         number: state.number,
  //         id: nanoid(),
  //       };
  //       const contacts = [...this.state.contacts, newContact];
  //       return {
  //         name: state.name,
  //         contacts,
  //       };
  //   }, () => {
  //     console.log(this.state);
  //     this.reset();
  //   })
    
  //   console.log(`New contact: ${this.state.name}`, this.state.number);

  // };

  // //resetting form
  // reset = () => {
  //   this.setState({
  //     name: '',
  //     number: '',
  //   });
  // };


  render() {
    return (
      <>
        <h1>Phonebook in Component</h1>
        <form onSubmit={this.props.onFormSubmit}>
          <label>
            Name
            <input
              type="text"
              value={this.props.name}
              onChange={this.props.onInputSubmit}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+((['-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              value={this.props.number}
              onChange={this.props.onInputSubmit}
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
}
