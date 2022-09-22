import React, {useState} from 'react'
import { Route, Switch } from 'react-router-dom';

import useFetch from './useFetch.js';
import Categories from './Categories.js';
import Nav from './Nav.js';
import Category from './Category.js';
import Search from './Search.js';
import People from './People.js';
import Loading from './Loading.js';


import '../styles/App.scss';

function App() {
  const [search, setSearch] = useState('')

  const { people } = useFetch('https://chuckswapi20220921081349.azurewebsites.net/api/Swapi/People')
  const { loader, data } = useFetch('https://chuckswapi20220921081349.azurewebsites.net/api/Chuck/Categories')
  const { list } = useFetch(`https://chuckswapi20220921081349.azurewebsites.net/api/Search/Search/${search}`)


  const handleChange = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }

  return (
    <div className="App">
      <Nav/>
      {
        loader? <Loading/>:
      <Switch>
        <Route exact path="/">
              <Search list={list} search={search} handleChange={handleChange} />
        </Route>
        <Route exact path="/people">
          <People people={people} loader={loader} />
        </Route>
        <Route exact path="/categories">
          <Categories categories={data.responseData} />
        </Route>
        <Route exact={true} path="/categories/:categoryName" component={Category} />
      </Switch>
      }
    </div>
  );
}

export default App;
