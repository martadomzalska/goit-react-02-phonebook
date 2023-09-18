export const ContactList = ({ contacts }) => (
  <>
    <h2>Contacts</h2>
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>{contact.name}</li>
      ))}
    </ul>
  </>
);
