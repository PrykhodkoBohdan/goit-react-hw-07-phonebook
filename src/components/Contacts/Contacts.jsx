import React from 'react';
import css from './Contacts.module.css';


const Contacts = ({ contacts, onDeleteBtnClick }) => (
  <div>
    <ol className={css.number_item}>
      {contacts.map(person => (
        <li key={person.id} className={css.search__contact}>
          {person.name} : {person.number}
          <button
            className={css.search__button}
            type="button"
            onClick={() => onDeleteBtnClick(person.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ol>
  </div>
);

export default Contacts;


