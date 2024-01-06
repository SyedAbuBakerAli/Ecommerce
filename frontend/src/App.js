import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './components/Home';
import ProductDetails from './components/product/ProductDetails';

import Login from './components/user/Login';
import Register from './components/user/Register';
import Profile from './components/user/Profile'

import ProtectedRoute from './components/route/ProtectedRoute';
import { loadUser } from './actions/userAction';
import store from './store'

function App() {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Router>
      <div className="App">

        <Header />

        <div className='container container-fluid'>
          <Routes>
            <Route path='/' Component={Home} exact />
            <Route path='/search/:keyword' Component={Home} />
            <Route path='/product/:id' Component={ProductDetails} />
            <Route path='/login' Component={Login} />
            <Route path='/register' Component={Register} />
            <Route path='/me' element={
              <ProtectedRoute Component={Profile}/>
                
            
            } /> 
          </Routes>
        </div>
     
        <Footer />
      </div>
    </Router>
  );
}

export default App;
