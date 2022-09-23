import React, {useState} from 'react'
import { Route, Switch } from 'react-router-dom';

import useFetch from './useFetch.js';
import Nav from './Nav.js';
import Search from './Search.js';
import Categories from './Categories.js';
import Category from './Category.js';
import People from './People.js';
import Error from './Error.js';
import Loading from './Loading.js';

import '../styles/App.scss';

function App() {
  const [search, setSearch] = useState('')

  const { lists, error } = useFetch(`https://chuckswapi20220921081349.azurewebsites.net/api/Search/Search/${search}`)
  const { people } = useFetch('https://chuckswapi20220921081349.azurewebsites.net/api/Swapi/People')
  const { loader, data } = useFetch('https://chuckswapi20220921081349.azurewebsites.net/api/Chuck/Categories')


  const handleChange = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }

  return (
    <div className='App'>
      <Nav/>
      {
        loader? <Loading/>:
      <Switch>
        <Route exact path='/'>
          <Search lists={lists} search={search} handleChange={handleChange} />
        </Route>
        <Route exact path='/people'>
          <People people={people} loader={loader} />
        </Route>
        <Route exact path='/categories'>
          <Categories categories={data.responseData} />
        </Route>
        <Route exact path='/categories/:categoryName' component={Category} />
        <Route exact path='*'>
          <Error error={error} />
        </Route>
      </Switch>
      }
    </div>
  );
}

export default App;
