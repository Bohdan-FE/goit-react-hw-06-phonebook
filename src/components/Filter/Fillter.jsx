import { useDispatch, useSelector } from 'react-redux';
import { FilterTitle, Input } from './Filter.styled';
import { changeFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(state => state.filter);

  function handleChange(e) {
    dispatch(changeFilter(e.target.value));
  }

  return (
    <>
      <FilterTitle>Filter contacts by name</FilterTitle>
      <Input type="text" name="filter" value={filter} onChange={handleChange} />
    </>
  );
};
