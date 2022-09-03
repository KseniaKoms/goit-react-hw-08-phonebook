import { ContactForm } from 'components/Contacts/ContactsForm';
import { Container } from 'components/Contacts/Container';
import { ContactsList } from 'components/Contacts/ContactsList';
import { Filter } from 'components/Contacts/Filter';

const Contacts = () => {
  return (
    <Container>
      <ContactForm />
      <Filter />
      <ContactsList />
    </Container>
  );
};

export default Contacts;
