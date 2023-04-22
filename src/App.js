import LoginPage from './components/login';
import ProfilePage from './components/profile';
import { Route, Routes } from "react-router-dom";
import './App.css';


//function app
function App() {
    return (

  
    <Routes>
          <Route path="" element={<LoginPage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
    </Routes>
    
  
  )
}
//export
export default App;