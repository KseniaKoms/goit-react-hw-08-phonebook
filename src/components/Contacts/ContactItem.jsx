import { useRemoveContactMutation } from 'redux/contacts/contactsApi';
import { Notify } from 'notiflix';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'components/Spinner/Spinner';

export const ContactItem = ({ name, number, id }) => {
  const [removeContact, { isLoading: isRemoving, isSuccess }] =
    useRemoveContactMutation();
  useEffect(() => {
    if (isSuccess) {
      Notify.success('Contact deleted');
    }
  }, [removeContact, isSuccess]);
  return (
    <li key={id}>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={() => removeContact(id)}>
        {isRemoving ? <Spinner /> : 'X'}
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
