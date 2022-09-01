import { Notify } from 'notiflix';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../redux/contacts/contactsApi';
import { useState, useEffect } from 'react';

export const ContactForm = () => {
  const { data } = useGetContactsQuery();
  const [addContact, { isLoading: adding, isSuccess }] =
    useAddContactMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    if (isSuccess) {
      Notify.success('Contact was added to your phonebook');
      setName('');
      setNumber('');
    }
  }, [isSuccess]);

  const handleSubmit = e => {
    e.preventDefault();

    if (data.some(item => item.name.toLowerCase() === name.toLowerCase())) {
      Notify.warning(`${name} is already in contacts!`);
      return;
    }

    addContact({ name, number });
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        onChange={handleChange}
        value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        autoComplete="off"
      />

      <label htmlFor="number">Tel:</label>
      <input
        onChange={handleChange}
        value={number}
        type="tel"
        name="number"
        autoComplete="off"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button type="submit">
        {adding ? <p>adding...</p> : <p>+ add contact</p>}
      </button>
    </form>
  );
};
