import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Page404 from './pages/P404';
import LoginPage from './pages/loginpage';
import './styles/global.scss'
import CadastroPage from './pages/cadastropage';
import { UserPage } from './pages/userpage';
import AddVideo from './pages/addVideos';
import EditUser from './pages/editUser';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/cadastro' element={<CadastroPage></CadastroPage>}></Route>
        <Route path='/user/about' element={<UserPage></UserPage>}></Route>
        <Route path='/user/stared' element={<UserPage></UserPage>}></Route>
        <Route path='/user/videos' element={<UserPage></UserPage>}></Route>
        <Route path='/videos/add' element={<AddVideo></AddVideo>}></Route>
        <Route path='/videos/add' element={<AddVideo></AddVideo>}></Route>
        <Route path='/user/edit' element={<EditUser></EditUser>}></Route>
        <Route path='*' element={<Page404></Page404>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
