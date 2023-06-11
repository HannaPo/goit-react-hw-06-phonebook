import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <div>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          id="filter"
          value={filter}
          onChange={e => dispatch(setFilter(e.target.value))}
        />
      </Label>
    </div>
  );
};

export default Filter;