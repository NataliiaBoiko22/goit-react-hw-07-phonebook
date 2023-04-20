import React from 'react';
import css from './filter.module.css';
import { useDispatch, useSelector  } from 'react-redux';
import { filterContact } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);

   return (
    <>
      <label className={css.title}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={(e) => dispatch(filterContact(e.currentTarget.value))}
        />
      </label>
    </>
  );
};

export default Filter;

