import { ContactListProps } from "./ContactList.types";

const ContactList = ({ contacts }: ContactListProps) => {
  return (
    <div className="w-full flex flex-col p-4">
      {contacts.map((contact) => (
        <div key={contact._id}>
          <div className="divider text-sm uppercase">
            <h2>{contact.title}</h2>
          </div>

          <div className="w-full flex flex-col justify-between p-4">
            <div className="text-xl">{contact.name}</div>
            <div>{contact.email}</div>
            <div>{contact.number}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
