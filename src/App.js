import LoginForm from './Components/LoginForm';
import { Route , Routes } from 'react-router-dom';
import './App.css';
import RegisterForm from './Components/RegisterForm';



function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/login' element={<LoginForm></LoginForm>} ></Route>
        <Route path='/register' element={<RegisterForm/>}></Route>
        
      </Routes>
     
    </div>
  );
}

export default App;
