import ContactForm from "./ContactForm/ContactForm"
import ContactList from "./ContactList/ContactList"
import Filter from "./Filter/Filter"

export default function Contacts(){
    return(
        <div>
        <ContactForm />
        <Filter  />
        <ContactList />
        </div>
    )
}