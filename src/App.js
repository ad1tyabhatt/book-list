import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import {Routes,Route,BrowserRouter,Link} from 'react-router-dom'

function App() {
  return (
    // <BrowserRouter>
    // <Routes>
    // <Route path='/login' element={Login}/>
    // <Route path='/register' element={Register}/>
    // </Routes>
    // </BrowserRouter>
    <Login/>
  );
}

export default App;
