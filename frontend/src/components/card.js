import React from "react";

export const Card = ({ listOfContacts }) => {
  return (
    <>
      {listOfContacts.map(contact => {
          console.log(contact.id)
        return (
            
          <ul key={contact.id}>

            <li className="links">{contact.name}: {contact.phone_number}</li>
          </ul>
        );
      })}
    </>
  );
};
