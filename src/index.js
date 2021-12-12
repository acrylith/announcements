import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import ListContext from './context';
import items from './items';

import App from './App';

function Main() {
  const [list, setList] = useState(items)
  return(
    <React.StrictMode>
      <ListContext.Provider value={{announcements:{list, setList}}}>
        <App/>
      </ListContext.Provider>
    </React.StrictMode>
  )
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);