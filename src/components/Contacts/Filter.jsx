import { setFilter, selectFilter } from 'redux/contacts/filterSlice';
import { useSelector, useDispatch } from 'react-redux';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" name="filter" onChange={handleChange} value={filter} />
    </>
  );
};
