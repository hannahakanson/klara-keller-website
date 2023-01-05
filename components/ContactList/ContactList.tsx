import { ContactListProps } from "./ContactList.types";

const ContactList = ({ contacts }: ContactListProps) => {
  return (
    <div>
      {contacts.map((contact) => (
        <div key={contact._id} className="flex flex-col pb-4">
          <div className="text-xs">{contact.title}</div>
          <div>{contact.name}</div>
          <div className="text-xs">{contact.email}</div>
          <div className="text-xs">{contact.number}</div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
