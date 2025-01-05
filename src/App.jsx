import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import SearchBox from "./Components/SearchBox/SearchBox";

const App = () => {
  
  return (
   <div>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox />
  <ContactList />
   </div>
  );
};

export default App;
