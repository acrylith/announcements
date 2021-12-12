import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Navbar from './component/Navbar';
import Add from './Add';
import Search from './Search'
import List from './List'
import AnnouncementPage from './AnnouncementPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>

        <Switch>
          <Route path="/search">
            <Search/>
          </Route>
          <Route path="/add">
            <Add/>
          </Route>
          <Route path="/announcement/:id" component={AnnouncementPage}/>
          <Route path="/">
            <List/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
