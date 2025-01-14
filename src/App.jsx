import { useEffect, useState } from 'react';
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";



function App() {
  const arrayContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [contact, setContact] = useState(
    JSON.parse(localStorage.getItem("contacts")) || arrayContacts
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contact));
  }, [contact]);

  const addContact = (newContact) => {
    setContact((prevContacts) => [...prevContacts, newContact]);
  };

  const [findName, setFindName] = useState("");

  const filteredContacts = contact.filter((contact) =>
    contact.name.toLowerCase().includes(findName.toLowerCase())
  );

  const deleteContact = (numberId) => {
    setContact((prevItem) => prevItem.filter((item) => item.id !== numberId));
  };

 
  return (
   <div>
  <h1>Phonebook</h1>
  <ContactForm addContact={addContact} />
  <SearchBox filter={findName} onFindName={setFindName} />
  <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
   </div>
  );
};

export default App;
