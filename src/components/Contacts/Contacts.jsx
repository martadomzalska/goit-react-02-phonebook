export const Contacts = ({ contactList }) => {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contactList.map(contact => (
          <li key={contact.id}>{contact.name}</li>
        ))
    }
      </ul>
    </>
  );
};
