import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import useFetch from './useFetch.js';
import Categories from './Categories.js';
import Category from './Category.js';

import Loading from './Loading.js';

import '../styles/App.scss';

function App() {
  const { loader, data } = useFetch('https://chuckswapi20220921081349.azurewebsites.net/api/Chuck/Categories')

  return (
    <BrowserRouter className="App">
      {
        loader? <Loading/>:
      <Switch>
        <Route exact path="/categories">
          <Categories categories={data.responseData} />
        </Route>
        <Route exact={true} path="/categories/:categoryName" component={Category} /> 
      </Switch>
      }
    </BrowserRouter>
  );
}

export default App;
