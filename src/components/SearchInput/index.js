import { useRecoilState } from 'recoil';
import { searchState } from './../../components/App';

function SearchInput() {
    const [searchQuery, setQuery] = useRecoilState(searchState);

    const onChange = (event) => {
        setQuery(event.target.value);
    };

    return (
      <input type="text" value={ searchQuery } onChange={ onChange } />
    );
  }
  
  export default SearchInput;