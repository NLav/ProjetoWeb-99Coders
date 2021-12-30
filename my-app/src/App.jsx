import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Site from './site/site';
import Login from './app/login';

function App() {
    return <BrowserRouter>
    <Routes>
        <Route path='/reactn' element={<Site/>} />
        <Route exact path='/reactn/app' element={<Login/>} />
    </Routes>
    </BrowserRouter>
}

export default App;