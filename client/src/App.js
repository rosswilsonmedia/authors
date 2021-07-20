import './App.css';

import Authors from './views/Authors';
import NewAuthor from './views/NewAuthor';
import UpdateAuthor from './views/UpdateAuthor';

import {Router} from '@reach/router';

function App() {
  return (
    <Router>
      <Authors path='/'/>
      <NewAuthor path='/new'/>
      <UpdateAuthor path='/edit/:id'/>
    </Router>
  );
}

export default App;
