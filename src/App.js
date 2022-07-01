import { Route, Routes } from 'react-router-dom';
import './App.css';
import CompletedTask from './Components/CompletedTask/CompletedTask';
import Home from './Components/Home/Home';
import Navbar from './Components/Shared/Navbar';
import ToDo from './Components/ToDo/ToDo';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/todo' element={<ToDo/>}></Route>
        <Route path='/completed-task' element={<CompletedTask/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
