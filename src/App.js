import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Sample from './Port-Folio/Sample';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
      
        <Route path="/" element={<Sample/>}></Route>

        </Routes>
      </BrowserRouter>

      
    </>
  );
}

export default App;
