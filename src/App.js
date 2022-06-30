import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Shared/Navbar';
import ToDo from './Components/ToDo/ToDo';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/todo' element={<ToDo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
