import React from 'react';
import { useDispatch } from 'react-redux';

import css from '../components/Form/Form.module.css';
// import { deleteContact } from 'redux/actions';
import { deleteContact } from 'redux/contactsSlice';

const ContactsItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handlerDeleteContact = () => dispatch(deleteContact(id));

  return (
    <div className={css.liitem}>
      <div>
        <span>{name}: </span>
        <span>{number}</span>
      </div>

      <button className={css.itembtn} onClick={handlerDeleteContact}>
        Delete
      </button>
    </div>
  );
};

export default ContactsItem;
