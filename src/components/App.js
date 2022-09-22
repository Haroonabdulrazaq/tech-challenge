import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import useFetch from './useFetch.js';
import Category from './Category.js';
import Loading from './Loading.js';

import '../styles/App.scss';

function App() {
  const { loader, data } = useFetch('https://chuckswapi20220921081349.azurewebsites.net/api/Chuck/Categories')

  return (
    <Router className="App">
      {
        loader? <Loading/>:
      <Switch>
        <Route exact path="/categories">
          <Category categories={data.responseData} />
        </Route>
      </Switch>
      }
    </Router>
  );
}
// "react-router-dom": "^5.0.0",
export default App;
