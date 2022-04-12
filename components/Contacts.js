// export default ContactCard
import React, { useState } from "react";
import { validateEmail, validateMessage } from "../utils/helpers";


function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or name is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!validateMessage(message)) {
      setErrorMessage(
        `Must provide a Message`
      );
      return;
    }
    alert(`Thanks for your message ${name}!`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className="contactForm">
      <p>Send me a message! {name}</p>
      <form className="form">
        <input
          className="inputs"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="E-mail"
        />
        <input
          className="inputs"
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <textarea 
          className="inputs"
          id="messageField"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        ></textarea>
        <button id ="submitBtn" type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}


export default Form;
