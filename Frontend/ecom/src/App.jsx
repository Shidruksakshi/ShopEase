

import {BrowserRouter, Route, Routes ,useLocation} from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'
import Logout from './pages/Logout'

import UsersData from './pages/admin/UsersData'
import AddProducts from './pages/admin/AddProducts'
import AdminHomepage from './pages/admin/AdminHomepage'
import ViewProducts from './pages/admin/ViewProducts'
import LoginAdmin from './pages/LoginAdmin'
import AdminProtectedRoute from './pages/admin/AdminProtectedRoute'
import LogoutAdmin from './pages/LogoutAdmin'
import PageNotFound from './pages/PageNotFound'
import Lsweaters from './pages/Lsweaters'
import LDenim from './pages/LDenim'
import Cart from './pages/Cart'
import ViewCategories from './pages/admin/ViewCategories'
import Wishlist from './pages/Wishlist'
import Profile from './pages/Profile'
import Women from './pages/Women'
import Men from './pages/Men'
import Kids from './pages/Kids'
import Unisex from './pages/Unisex'
import Dashboard from './pages/admin/Dashboard'
import Payment from './pages/Payment'



function Layout(){
  const location = useLocation();

  const isAdminPage = location.pathname.startsWith("/admin") 
    || location.pathname === "/loginadmin";

    return(
      <>
      
      {!isAdminPage && <Navbar />}
      
        <Routes>

          {/* Public Routes */}
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/logout' element={<Logout/>} />
          <Route path='/admin/logout' element={<LogoutAdmin/>} />
          <Route path='/error' element={<PageNotFound/>}/>
          <Route path='/lsweaters' element={<Lsweaters/>}/>
          <Route path='/ldenim' element={<LDenim/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/profile' element={<Profile/>} />
          <Route path='/women' element={<Women/>} />
          <Route path='/men' element={<Men/>} />
          <Route path='/kids' element={<Kids/>}/>
          <Route path='/unisex' element={<Unisex/>} />
          <Route path='/payment' element={<Payment/>} />


          {/* Admin Login */}
          <Route path='/loginadmin' element={<LoginAdmin/>} />

          {/* Protected Admin Routes */}
          <Route 
            path="/admin" 
            element={
              <AdminProtectedRoute>
                <AdminHomepage />
              </AdminProtectedRoute>
            }
          >
            <Route path="userdata" element={<UsersData />} />
            <Route path="addproducts" element={<AddProducts />} />
            <Route path="viewproducts" element={<ViewProducts />} />
            <Route path="viewcategories" element={<ViewCategories/>} />
            <Route path='dashboard' element={<Dashboard/>} />
          </Route>

        </Routes>

      </>
    )
}


function App() {
  return (
    <>
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
    </>
  );
}

export default App;
