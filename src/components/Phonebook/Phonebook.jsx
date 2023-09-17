import { Component } from 'react';
import { nanoid } from 'nanoid';

const Button = ({ changeMessage }) => (
  <button type="submit" onClick={changeMessage}>
    Add
  </button>
);

export class Phonebook extends Component {
//     state = {
//     contacts: [],
//         name:"",
//     }
//   // handleChange = e => {
//   //     this.setState((state,props) => ({
//   //         name: e.currentTarget.value,
//   //     }), console.log(this.state));
//   //     // this.setState({ name: e.currentTarget.value });
//   //     console.log(this.state)
//     // }
//     handleSubmit = e => {
//          e.preventDefault();
//       const { contacts, name } = this.state;
//         const form = e.currentTarget.value;
//          console.log({
//       form,
//       id: nanoid(),
//          });
        
//         this.setState({
//           name: e.currentTarget.value,
//           contacts: [].push(
//             {
//               name: e.currentTarget.value,
//               id: nanoid(),
//             }
//           ),
//         });


        
//     }


  

//     render() {
//       console.log(this.state)
//     return (
//       <>
//         <h2>Phonebook</h2>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name
//             <input
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               placeholder="Gorgo Gonzales"
//               // onChange={this.handleChange}
//             />
//           </label>
//           <button type="submit">Add contact</button>

          
//         </form>
//       </>
//     );
// }
}

