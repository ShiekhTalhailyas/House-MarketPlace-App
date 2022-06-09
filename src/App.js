import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import PrivateRoute from './components/PrivateRoute'
import Profile from './pages/Profile'
import Offers from './pages/Offers'
import Explore from './pages/Explore'
import Category from './pages/Category';
import ForgotPassword from './pages/ForgotPassword'
import CreateListing from './pages/CreateListing';
import Listing from './pages/Listing';
import Contact from './pages/Contact';
import EditListing from './pages/EditListing';
import Surprise from './pages/Surprise';

function App() {
  return (
    <>
    <Router> 
      <Routes>
        <Route path='/' element={<Explore />}/>
        <Route path='/surprise' element={<Surprise />}/>
        <Route path='/offers' element={<Offers />}/>
        <Route path='/create-listing' element={<CreateListing />}/>
         <Route path='/edit-listing/:listingId' element={<EditListing />}/>
        <Route path='/category/:categoryName/:listingId' element={<Listing />} />
        <Route path='/category/:categoryName' element={<Category />} />
         <Route path='/sign-in' element={<SignIn  />}/>
          <Route path='/profile' element={<PrivateRoute />}>
           <Route path='/profile' element={<Profile />}/>
          </Route>
           <Route path='/sign-up' element={<SignUp />}/>
             <Route path='/forgot-password' element={<ForgotPassword />}/>
      <Route path='/contact/:landlordId' element={<Contact />}/>
             
      </Routes>
      <Navbar />
    </Router>  
    <ToastContainer />
    </>
  )
}

export default App;
