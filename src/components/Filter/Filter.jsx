import { useDispatch, useSelector } from 'react-redux';

import style from './Filter.module.css';
import { setFilter } from '../../redux/contacts/filterSlice';
import { selectFilter } from '../../redux/selectors';

const Filter = () => {

    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();
    const filterInputing = e => {
        dispatch(setFilter(e.target.value));
    };
  
    return (
        <label className={style.name}>
            Find contacts by name
            <input className={style.input} type='text' value={filter} onChange={filterInputing} />
        </label>
    )
};

export default Filter