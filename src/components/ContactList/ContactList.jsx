import PropTypes from 'prop-types';
import { ReactComponent as DeleteIcon } from '../../icons/cross.svg';
import { Wrapper, Item, Button } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <Wrapper>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
          <Button
            type="button"
            aria-label="Delete contact"
            onClick={() => onDeleteContact(id)}
          >
            <DeleteIcon />
          </Button>
        </Item>
      ))}
    </Wrapper>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ContactList;