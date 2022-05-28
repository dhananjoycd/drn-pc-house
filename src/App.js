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
import PurchaseNow from './Components/OtherPages/PurchaseNow/PurchaseNow';
import ManagePCpart from './Components/OtherPages/DashBoard/ManagePCpart/ManagePCpart';
import PayPayment from './Components/OtherPages/DashBoard/PayPayment/PayPayment';
import RequireUser from './Components/useRequireAuth/RequireUser';
import MyPortFoli from './Components/OtherPages/MyPortFoli/MyPortFoli';
import RequireAdmin from './Components/useRequireAuth/RequireAdmin';

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
    <Route path="parts/:partID" element={<PurchaseNow></PurchaseNow>}></Route>

    <Route path="reviews" element={<Reviews></Reviews>}></Route>
    <Route path="myPortfolio" element={
         <RequireUser>
    <MyPortFoli></MyPortFoli>
    </RequireUser>
    }></Route>

    <Route path="/dashboard/myorders/payPayment/:payID" element={
    <RequireUser>
    <PayPayment></PayPayment>
    </RequireUser>}></Route>


    <Route path="dashboard" element={
       <RequireUser>
    <DashBoard></DashBoard>
    </RequireUser>
    }>
    
      <Route path='myorders' element={<MyOrder></MyOrder> }></Route>
      <Route path='addreview' element={< AddReview></AddReview> }></Route>
      <Route path='myprofile' element={ <MyProfile></MyProfile> }></Route>
      <Route index element={ <MyProfile></MyProfile> }></Route>


      <Route path='manageOrders' element={<RequireAdmin>  <ManageOrder></ManageOrder> </RequireAdmin> }></Route>
      <Route path='addProducts' element={<RequireAdmin>  <AddProducts></AddProducts> </RequireAdmin> }></Route>

      <Route path='manageProducts' element={<RequireAdmin>  <ManageProducts></ManageProducts> </RequireAdmin> }></Route>
      <Route path='manageProducts/:pcPartID' element={<RequireAdmin> <ManagePCpart></ManagePCpart> </RequireAdmin> }></Route>

      <Route path='admin' element={<RequireAdmin> <MakeAdmin></MakeAdmin> </RequireAdmin> }></Route>
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
