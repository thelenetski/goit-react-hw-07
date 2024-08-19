import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <div className={css.contactList}>
      <ul>
        {contacts.length > 0 &&
          contacts.map((user) => {
            return (
              <li key={user.id}>
                <Contact contact={user} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ContactList;
