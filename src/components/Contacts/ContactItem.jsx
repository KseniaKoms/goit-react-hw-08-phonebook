import { useRemoveContactMutation } from 'redux/contacts/contactsApi';
import { Notify } from 'notiflix';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'components/Spinner/Spinner';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactItem = ({ name, number, id }) => {
  const [removeContact, { isLoading: isRemoving, isSuccess }] =
    useRemoveContactMutation();
  useEffect(() => {
    if (isSuccess) {
      Notify.success('Contact deleted');
    }
  }, [removeContact, isSuccess]);
  return (
    <ListItem key={id}>
      <ListItemText>
        {name}: {number}
      </ListItemText>
      <Button
        type="button"
        onClick={() => removeContact(id)}
        variant="outlined"
        startIcon={isRemoving ? <Spinner /> : <DeleteIcon />}
      >
        Delete
      </Button>
    </ListItem>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
