import React from 'react';
import css from './Contacts.module.css';


const Contacts = ({ contacts, onDeleteBtnClick }) => (
  <div>
    <ol className={css.number_item}>
      {contacts.map(({name, number, id}) => (
        <li key={id} className={css.search__contact}>
          {name} : {number}
          <button
            className={css.search__button}
            type="button"
            onClick={() => onDeleteBtnClick(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ol>
  </div>
);

export default Contacts;


