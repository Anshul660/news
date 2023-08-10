
import './App.css';
import React, {useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
//video 41done  
 //45  530 9h

const  App =()=> {
  const pageSize = 6;
  const apiKey =process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
 

    return (
<div>
<Router>
  <Navbar/>
  <LoadingBar
        color='#f11946'
        progress={progress} 
      />
  <Switch>
  <Route exact path="/"><News setProgress ={setProgress} apiKey={apiKey} Key="general" pageSize={pageSize} country="in" category='general'/> </Route>
  <Route exact path="/business"><News setProgress ={setProgress} apiKey ={apiKey} Key="business" pageSize={pageSize} country="in" category='business'/> </Route>
<Route exact path="/entertainment"><News setProgress ={setProgress} apiKey ={apiKey} Key=" " pageSize={pageSize} country="in" category='entertainment'/> </Route>
<Route exact path="/general"><News setProgress ={setProgress} apiKey ={apiKey} Key="general" pageSize={pageSize} country="in" category='general'/> </Route>
<Route exact path="/health"><News setProgress ={setProgress} apiKey ={apiKey} Key="entertainment" pageSize={pageSize} country="in" category='health'/> </Route>
<Route exact path="/sports"><News setProgress ={setProgress} apiKey ={apiKey} Key="health" pageSize={pageSize} country="in" category='sports'/> </Route>
<Route exact path="/science"><News setProgress ={setProgress} apiKey ={apiKey} Key="science" pageSize={pageSize} country="in" category='science'/> </Route>
<Route exact path="/technology"><News setProgress ={setProgress} apiKey ={apiKey} Key="technology" pageSize={pageSize} country="in" category='technology'/> </Route>
 </Switch>
</Router>
</div>
    )
  }
export default App