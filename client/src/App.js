import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/try";
import Page from "./pages/404Page/Notfound.jsx"
import Register from "./pages/register/Register"
import Success from './pages/success/success'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>        
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/*" element={<Page/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
