import './App.css';
import React from 'react';
import { Switch, Route } from "react-router-dom";
import Sidebar from '../components/Sidebar/Sidebar';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Work from '../components/Work/Work';
import BlogContainer from './BlogContainer';
import ContactsContainer from './ContactsContainer';


function App() {
  return (
    <div className="App">
        <Sidebar />
        <Switch>
            <Route  exact path="/" component={About} />
            <Route  exact path="/MyVision" component={About} />
            {/* <Route path="/homepage" component={Home} /> */}
            <Route exact path="/MyVision/about" component={About} />
            <Route path="/MyVision/about" component={About} />
            {/* <Route path="/MyVision/work" component={Work} /> */}
            
            <Route path="/MyVision/blog" component={BlogContainer} />
            <Route path="/MyVision/contacts" component={ContactsContainer} />
        </Switch>
    </div>
  );
}
export default App;
