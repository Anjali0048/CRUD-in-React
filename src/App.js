import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home.jsx"
import CreateUsers from './pages/CreateUsers';
import EditUser from './pages/EditUser';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>

        {/* route to create new user */}
        <Route path='/create' element={<CreateUsers/>}/>

        {/* route to edit exisitng user by fetching its id */}
        <Route path='/edit/:id' element={<EditUser/>}/>
      </Routes>
    </>
  );
}

export default App;
