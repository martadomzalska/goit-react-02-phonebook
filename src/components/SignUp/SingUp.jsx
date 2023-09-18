import { Component } from "react";

export class SignUpForm extends Component {
  state = {
    login: '',
  };

  // Odpowiada za aktualizację stanu
  handleChange = e => {
    this.setState({ login: e.target.value });
  };

  // Wywoływany jest podczas wysyłania formularza
  handleSubmit = evt => {
    evt.preventDefault();
    console.log(`Signed up as: ${this.state.login}`);

    // Props, który przekazywany jest do formularza do wywołania podczas jego wysyłania
    // this.props.onSubmit({ ...this.state });
  };

  render() {
    const { login } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter login"
            value={login}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Sign up as {login}</button>
      </form>
    );
  }
}