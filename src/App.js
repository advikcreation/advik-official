import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import { About, Footer, Header, Login, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import Home from './Home';

const App = () => (
  <div className="app">
    <Router >
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
    {/* <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer /> */}
    </Routes>
    </Router>
  </div>
);

export default App;
