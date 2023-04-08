import { useDispatch } from 'react-redux';
import { findContact } from 'redux/contacts/filterSlice';
import css from '../Form/Form.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterContacts = e => {
    const value = e.target.value;
    dispatch(findContact(value));
  };
  return (
    <div className={css.contacts}>
      <label>Find contacts by name</label>
      <input
        type="text"
        className={css.input}
        onChange={handleFilterContacts}
      ></input>
    </div>
  );
};
