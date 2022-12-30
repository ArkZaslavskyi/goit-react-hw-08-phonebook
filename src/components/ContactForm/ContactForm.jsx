import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "redux/contacts/operations";
import css from "./ContactForm.module.css";

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const resetContactForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const form = e.currentTarget;
    // console.log(form);

    dispatch(addContact({ name, number }));
    resetContactForm();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
            Name
            <input className={css.input}
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={handleChangeInput}
            />
        </label>

        <label className={css.label}>
            Number
            <input className={css.input}
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={handleChangeInput}
            />
        </label>

        <button className={css.btn} type="submit">Add contact</button>
        
    </form>
  );
};