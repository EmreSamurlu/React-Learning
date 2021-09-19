import { useState, useEffect } from 'react'
import "./style.css"

import List from "./List";
import Form from "./Form";

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: "Özge",
            phone_number: "12346579"
        }, {
            fullname: "Okan",
            phone_number: "5465432187"
        }, {
            fullname: "Mehmet",
            phone_number: "6579830573"
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts])

    return (
        <div id="container">
            <h1>Contacts</h1>
            <Form addContact={setContacts} contacts={contacts} />
            <List contacts={contacts} />
        </div>
    )
}

export default Contacts
