import LoginForm from './Components/LoginForm';
import { Route , Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/login' element={<LoginForm></LoginForm>} ></Route>
        
      </Routes>
     
    </div>
  );
}

export default App;
