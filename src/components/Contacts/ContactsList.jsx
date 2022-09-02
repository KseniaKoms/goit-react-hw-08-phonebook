import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import { ContactItem } from './ContactItem';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/filterSlice';
import { Spinner } from 'components/Spinner/Spinner';
import List from '@mui/material/List';

export const ContactsList = () => {
  const { data, isLoading } = useGetContactsQuery();
  const filter = useSelector(selectFilter);
  return (
    <List>
      {isLoading && <Spinner />}
      {data &&
        data
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(({ name, id, number }) => {
            return <ContactItem key={id} name={name} number={number} id={id} />;
          })}
    </List>
  );
};
