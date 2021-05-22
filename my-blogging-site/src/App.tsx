import React from 'react';
import NavBar from './Components/HomePage/NavBar';
import Footer from './Components/HomePage/Footer';
import Card from './Components/Cards/Card';
import {Switch,Route} from 'react-router-dom';
import Home from './Routes/Home'
import axios from 'axios';
import Blogs from './Routes/Blogs'
import AddBlog from './Routes/AddBlog';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
export default function App() {



  

  const item={
    title:"the blog",
    author:"kota",
    createdAt: "number",
    content:"### h3 \n **wow** nice",
    description:"something"
}
  return (
    <div>
      <NavBar />
      {/* <NavBar /> */}
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/blog/:id" >
          <Blogs />
        </Route>
        <PrivateRoute path="/add-blog" >
          <AddBlog />
        </PrivateRoute>

      </Switch>
      
      <Footer />
   
    </div>
  )
}
