import './App.css';
import PrivateRoutes from './containers/PrivateRoutes/PrivateRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';

import SubjectContext from './context/SubjectContext'
import { useState } from 'react';


function App() {
  const [selectSubject , setSelectSubject] = useState(null)
  return (
    <div className="App">
      <SubjectContext.Provider value={{selectSubject , setSelectSubject}} >
      <PrivateRoutes />
      </SubjectContext.Provider>
    </div>
  );
}

export default App;
