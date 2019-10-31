import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Model from './pages/Model'
import Error from './pages/Error'
import Shop from './pages/Shop'
import Navbar from './components/Navbar'

import {DataProvider} from './components/data'

function App() {
  return (
    <>
    <DataProvider>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />        
        <Route exact path='/shop' component={Shop}/>        
        <Route exact path='/shop/:model' component={Model} />
        <Route exact component={Error} />
      </Switch>
    </DataProvider>
    </>
  );
}

export default App;
