import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Header/Login/Login';
import SignUp from './Components/Header/SignUp/SignUp';
import PageNotFound from './Components/OtherPages/PageNotFound/PageNotFound';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
      <Route path="/" element={ <Home></Home> }></Route>
    <Route path="/home" element={ <Home></Home> }></Route>

    <Route path="/blogs" element={'add blogs for 6 ans'}></Route>
   {/*  <Route path="/" element={}></Route>
    <Route path="/" element={}></Route>
    <Route path="/" element={}></Route>
    <Route path="/" element={}></Route>
    <Route path="/" element={}></Route>
    <Route path="/" element={}></Route>
    <Route path="/" element={}></Route>
    <Route path="/" element={}></Route> */}

    <Route path="/login"  element={<Login></Login>}></Route>
    <Route path="/signup"  element={<SignUp></SignUp>}></Route>
    <Route path="*"  element={<PageNotFound></PageNotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
