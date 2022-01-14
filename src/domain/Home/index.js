import { Link } from "react-router-dom";
import { useRecoilValue } from 'recoil';
import { searchState } from './../../components/App';
import SearchInput from './../../components/SearchInput';

function Home() {
    const searchQuery = useRecoilValue(searchState);

    return (
      <>
        <h3>Sub title of home</h3>
        <SearchInput></SearchInput>
        <div>
            Searching for: { searchQuery }
            <br></br>
            <Link to="/images">Images</Link>
        </div>
      </>
    );
  }
  
  export default Home;