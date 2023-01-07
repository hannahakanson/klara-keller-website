import { ContactListProps } from "./ContactList.types";

const ContactList = ({ contacts }: ContactListProps) => {
  return (
    <div className="w-full md:w-2/3 flex flex-col">
      {contacts.map((contact) => (
        <div key={contact._id}>
          <div className="divider text-xs uppercase">{contact.title}</div>
         
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
