import React from 'react';
import css from './Contacts.module.css';
import PropTypes from "prop-types"

const Contacts = ({ contacts = [], onDeleteBtnClick }) => (
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

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteBtnClick: PropTypes.func.isRequired,
}

export default Contacts;


