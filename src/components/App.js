import React from 'react'
import { Route, Switch } from 'react-router-dom';

import useFetch from './useFetch.js';
import Categories from './Categories.js';
import Nav from './Nav.js';
import Category from './Category.js';
import People from './People.js';
import Loading from './Loading.js';


import '../styles/App.scss';

function App() {
  const { people } = useFetch('https://chuckswapi20220921081349.azurewebsites.net/api/Swapi/People')
  const { loader, data } = useFetch('https://chuckswapi20220921081349.azurewebsites.net/api/Chuck/Categories')

  return (
    <div className="App">
      <Nav/>
      {
        loader? <Loading/>:
      <Switch>
        <Route exact path="/categories">
          <Categories categories={data.responseData} />
        </Route>
        <Route exact path="/people">
          <People people={people} loader={loader} />
        </Route>
        <Route exact={true} path="/categories/:categoryName" component={Category} />
      </Switch>
      }
    </div>
  );
}

export default App;
