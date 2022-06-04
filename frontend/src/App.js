import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Profile from "./containers/Profile";
import NotFound from "./containers/NotFound";
import ResetPassword from "./containers/ResetPassword";
import Activate from "./containers/Activate";
import ResetPasswordConfirm from "./containers/ResetPasswordConfirm";


function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path='/' element={ <Home /> } />
                    <Route exact path='/signin' element={ <Login /> } />
                    <Route exact path='/signup' element={ <Register /> } />
                    <Route exact path='/profile' element={ <Profile /> } />
                    <Route exact path='/activate/:uid/:token' element={ <Activate /> } />
                    <Route exact path='/reset-password' element={ <ResetPassword /> } />
                    <Route exact path='/reset-password/confirm/:uid/:token' element={ <ResetPasswordConfirm /> } />
                    <Route exact path='*' element={ <NotFound /> } />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
