import React, { ReactElement, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Page404 from './pages/P404';
import LoginPage from './pages/loginpage';
import './styles/global.scss'
import CadastroPage from './pages/cadastropage';
import { UserPage } from './pages/userpage';
import AddVideo from './pages/addVideos';
import EditUser from './pages/editUser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../src/provider/auth'


type PrivateRouter = {
  children: ReactElement,
  redirectTo: string

}
function isLoggedIn(){
  const user = getUser()
  return user ? user.isAuthenticate : false
}
function getUser(){
  const userdata:any = localStorage.getItem('user')
  const user = JSON.parse(userdata)
  return user

}

function PrivateRoute({ children, redirectTo }: PrivateRouter): any {

  const isAuthenticate =  isLoggedIn()
  return isAuthenticate ? children : <Navigate to={redirectTo} />;
}
function LoginRoute({ children, redirectTo }: PrivateRouter): any {
  const isAuthenticate =  isLoggedIn()
  return isAuthenticate ? <Navigate to={redirectTo} /> : children;
}

function App() {
  const [user,setUser] = useState(getUser())
  return (
    <>


      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <AuthContext.Provider value={{user,setUser}}>
        <BrowserRouter>
          <Routes>
            
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<LoginRoute redirectTo='/'><LoginPage></LoginPage></LoginRoute>}></Route>
            <Route path='/cadastro' element={<LoginRoute redirectTo='/'><CadastroPage></CadastroPage></LoginRoute>}></Route>
            <Route path='/user/about' element={<PrivateRoute redirectTo='/login'><UserPage></UserPage></PrivateRoute>}> </Route>
            <Route path='/user/stared' element={<PrivateRoute redirectTo='/login'><UserPage></UserPage></PrivateRoute>}> </Route>
            <Route path='/user/videos' element={<PrivateRoute redirectTo='/login'><UserPage></UserPage></PrivateRoute>}> </Route>
            <Route path='/videos/add' element={<PrivateRoute redirectTo='/login'><AddVideo></AddVideo></PrivateRoute>}> </Route>
            <Route path='/user/edit' element={<PrivateRoute redirectTo='/login'><EditUser></EditUser></PrivateRoute>}> </Route>
            <Route path='*' element={<Page404></Page404>}></Route>
          </Routes>
        </BrowserRouter>

      </AuthContext.Provider>




    </>


  );
}

export default App;
