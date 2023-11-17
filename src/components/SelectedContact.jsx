import React, { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }

    if (selectedContactId) {
      fetchContact();
    }
  }, [selectedContactId]);

  useEffect(() => {
    console.log(contact);
  }, [contact]);

  return (
    <div>
      <h2>Selected Contact View</h2>
      <button onClick={() => setSelectedContactId(null)}>Back to List</button>
      {contact && (
        <>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
        </>
      )}
    </div>
  );
}