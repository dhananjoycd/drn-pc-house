import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Header/Login/Login';
import SignUp from './Components/Header/SignUp/SignUp';
import PageNotFound from './Components/OtherPages/PageNotFound/PageNotFound';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import DashBoard from './Components/OtherPages/DashBoard/DashBoard';
import MyOrder from './Components/OtherPages/DashBoard/MyOrder/MyOrder';
import AddReview from './Components/OtherPages/DashBoard/AddReview/AddReview';
import MyProfile from './Components/OtherPages/DashBoard/MyProfile/MyProfile';
import ManageOrder from './Components/OtherPages/DashBoard/ManageOrder/ManageOrder';
import AddProducts from './Components/OtherPages/DashBoard/AddProducts/AddProducts';
import ManageProducts from './Components/OtherPages/DashBoard/ManageProducts/ManageProducts';
import MakeAdmin from './Components/OtherPages/DashBoard/MakeAdmin/MakeAdmin';
import Blogs from './Components/OtherPages/Blogs/Blogs';
import Parts from './Components/OtherPages/Parts/Parts';
import Reviews from './Components/OtherPages/Reviews/Reviews';

function App() {
  return (
    <div >
      <Header></Header>
      <ToastContainer></ToastContainer>
      <Routes>
      <Route path="/" element={ <Home></Home> }></Route>
    <Route path="home" element={ <Home></Home> }></Route>

    <Route path="blogs" element={<Blogs></Blogs>}></Route>
    <Route path="parts" element={ <Parts></Parts>}></Route>
    <Route path="reviews" element={<Reviews></Reviews>}></Route>


    <Route path="dashboard" element={<DashBoard></DashBoard>}>
    
      <Route path='myorders' element={<MyOrder></MyOrder> }></Route>
      <Route path='addreview' element={< AddReview></AddReview> }></Route>
      <Route path='myprofile' element={ <MyProfile></MyProfile> }></Route>
      <Route index element={ <MyProfile></MyProfile> }></Route>
      <Route path='manageOrders' element={ <ManageOrder></ManageOrder> }></Route>
      <Route path='addProducts' element={ <AddProducts></AddProducts> }></Route>
      <Route path='manageProducts' element={ <ManageProducts></ManageProducts>}></Route>
      <Route path='admin' element={<MakeAdmin></MakeAdmin>}></Route>
    </Route>

    <Route path="/login"  element={<Login></Login>}></Route>
    <Route path="/signup"  element={<SignUp></SignUp>}></Route>
    <Route path="*"  element={<PageNotFound></PageNotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
