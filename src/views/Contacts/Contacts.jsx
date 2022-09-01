import { ContactForm } from 'components/Contacts/ContactsForm';
import { Container } from 'components/Contacts/Container';
import { Title } from 'components/Contacts/Title';
import { ContactsList } from 'components/Contacts/ContactsList';
import { Filter } from 'components/Contacts/Filter';

const Contacts = () => {
  return (
    <Container>
      <Title title="Phonebook" />
      <ContactForm />
      <Title title="Contacts" />
      <Filter />
      <ContactsList />
    </Container>
  );
};

export default Contacts;
