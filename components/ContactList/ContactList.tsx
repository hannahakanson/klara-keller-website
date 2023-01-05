import { ContactListProps } from "./ContactList.types"

const ContactList = ({contacts}: ContactListProps) => {
    console.log("Hello")
    return (
      <div>
        {contacts.map((contact) => (
          <div key={contact._id}>
            {contact.name}
          </div>
        ))}
      </div>
    );
}

export default ContactList
