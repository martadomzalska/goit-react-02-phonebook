import { Component } from "react";
import { nanoid } from 'nanoid';

// const INITIAL_STATE = {
//   contacts: [],
//   name: '',
// };
export class ContactForm extends Component {


    handleSubmit = evt => {
        evt.preventDefault();

        console.log(`Current name: ${this.state.name}`);
        this.setState((prevState) => {
  
            return {
                contacts: [{
                name:  this.state.name,
                id: nanoid(),
            }]
            }
            
        },
        console.log(this.state));
    }
    
  handleChange = evt => {
      this.setState({ name: evt.target.value });

    };
     
   


    render() {
  
    return (
        <>
            <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
                <label>
                    Name
            <input
              type="text"
            //   value={this.state.name}
              onChange={this.handleChange}
            />
                </label>
                <button type='submit'>Add to contacts</button>
        </form>
      </>
    );
  }
}