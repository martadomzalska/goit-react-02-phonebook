export const ContactList = ({ contacts, children }) => (
  <>
    <h2>Contacts</h2>
    {children}
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} - {contact.number}
        </li>
      ))}
    </ul>
  </>
);
