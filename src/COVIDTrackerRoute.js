import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import Dashboard from './App';
import WorldMap from './Map/App';
class COVIDTrackerRoute extends React.Component {
    render() {
        return (
            <Router> 
           <div className="App"> 
            <ul className="App-header"> 
              <li> 
               <Link to="/">Dashboard</Link>
              </li> 
              <li> 
                <Link to="/Map">WorldMap</Link> 
              </li> 
            </ul> 
            <Switch> 
              <Route exact path='/' component={Dashboard}></Route> 
              <Route exact path='/Map' component={WorldMap}></Route> 
            </Switch> 
          </div> 
       </Router> 
        );
    }
}
export default COVIDTrackerRoute;