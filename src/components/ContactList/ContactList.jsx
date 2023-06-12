import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { Wrapper, Item, Button } from './ContactList.styled';
import { ReactComponent as DeleteIcon } from '../../icons/cross.svg';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Wrapper>
      {filteredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
          <Button
            type="button"
            aria-label="Delete contact"
            onClick={() => dispatch(deleteContact(id))}
          >
            <DeleteIcon />
          </Button>
        </Item>
      ))}
    </Wrapper>
  );
};

export default ContactList;
