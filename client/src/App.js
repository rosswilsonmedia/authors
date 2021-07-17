import './App.css';

import Authors from './views/Authors';
import NewAuthor from './views/NewAuthor';
import UpdateAuthor from './views/UpdateAuthor';

import {Router} from '@reach/router';

function App() {
  return (
    <Router>
      <Authors path='/'/>
      <UpdateAuthor path='/edit/:id'/>
      <NewAuthor path='/new'/>
    </Router>
  );
}

export default App;
