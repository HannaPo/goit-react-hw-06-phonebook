import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container, Title, ContactsTitle } from './App.styled';

const App = () => {
    return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm/>
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;