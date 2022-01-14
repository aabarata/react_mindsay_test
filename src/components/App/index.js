import Home from './../../domain/Home';
import Images from './../../domain/Images';
import { atom, useRecoilState } from 'recoil';
import { Routes, Route } from "react-router-dom";

export const searchState = atom({
  key: 'searchState', 
  default: 'Mark'
});

export const imageState = atom({
  key: 'imageState', 
  default: [
    'Me',
    'You',
    'Il'
  ]
});

function App() {
  useRecoilState(searchState);
  useRecoilState(imageState);

  return (
    <>
      <h1>Titulo da pagina</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="images" element={<Images />} />
      </Routes>
    </>
  );
}

export default App;
