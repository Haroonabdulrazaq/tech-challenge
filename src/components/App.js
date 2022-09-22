import React from 'react'
import useFetch from './useFetch.js';
import Category from './Category.js';
import Loading from './Loading.js';

import '../styles/App.scss';

function App() {
  const { loader, data } = useFetch('https://chuckswapi20220921081349.azurewebsites.net/api/Chuck/Categories')

  return (
    <div className="App">
      {
        loader? <Loading/>:
      <Category categories={data.responseData} />
      }
    </div>
  );
}

export default App;
